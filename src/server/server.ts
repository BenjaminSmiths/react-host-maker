import * as express from 'express';
import {Router} from 'express';
import {json} from './models/PropertiesModel';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.set("port", process.env.PORT || 4001);

if (process.env.NODE_ENV === "production") {
    // server the react app in production mode
    app.use('/static', express.static(__dirname + '/static'));
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
}

let router: Router;
router = Router();
router.route('/status').get((req, res) => {
    res.send('We are running 100%');
});
router.route('/properties').get((req, res) => {
    res.json(json);
});

app.use('/api', router);

app.listen(app.get("port"), function () {
    console.log(`react-host-maker app running in ${process.env.NODE_ENV} env. Listening on port ${app.get("port")}`)
});