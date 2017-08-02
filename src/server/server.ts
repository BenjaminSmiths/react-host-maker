import * as express from 'express';
import {NextFunction, Request, Response, Router} from 'express';
import {json} from './models/PropertiesModel';
import * as cors from 'cors';

const app = express();
app.set('port', 4001);

app.use(cors());


let router: Router;
router = Router();
router.route('/status').get((req: Request, res: Response) => {
    res.send('We are running 100%');
});
router.route('/properties').get((req: Request, res: Response) => {
    res.json(json);
});
app.use('/api', router);

// catch 404 and render error json
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    res.json({error: '404 NOT FOUND'});
    next();
});

app.listen(app.get('port'), () => {
    console.log(`react-host-maker api running in ${process.env.NODE_ENV} env. Listening on port ${app.get('port')}`)
});