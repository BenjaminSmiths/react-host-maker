import * as express from 'express';
import {Router} from 'express';

const app = express();
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

app.use('/api', router);

app.listen(app.get("port"), function () {
    console.log(`Example app listening on port ${app.get("port")}`)
});