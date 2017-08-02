import * as express from 'express';
import {NextFunction, Request, Response, Router} from 'express';
import {json} from './models/PropertiesModel';
import * as cors from 'cors';
import * as path from 'path';

const app = express();
app.set('port', process.env.PORT || 4001);

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


if (process.env.NODE_ENV === 'production') {
    // server the react app in production mode
    app.use('/static', express.static(path.resolve(__dirname + '/../static')));
    app.get(['/', '/index.html'], (req: Request, res: Response) => {
        res.sendFile(path.resolve(__dirname + '/../index.html'));
    });
    app.get(/^(.+)$/, (req: Request, res: Response) => {
        let resolved = path.resolve(__dirname + '/..' + req.path);
        res.sendFile(resolved);
    });
}

// catch 404 and render error json
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404);
    res.json({error: '404 NOT FOUND'});
    next();
});

app.listen(app.get('port'), () => {
    console.log(`react-host-maker app running in ${process.env.NODE_ENV} env. Listening on port ${app.get('port')}`)
});