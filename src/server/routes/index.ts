import {NextFunction, Request, Response, Router} from 'express';
import {json} from '../models/PropertiesModel';


export const routes = {
    create: () => {

        let router: Router;
        router = Router();

        router.route('/status').get((req: Request, res: Response) => {
            res.send('We are running 100%');
        });
        router.route('/properties').get((req: Request, res: Response) => {
            res.json(json);
        });

        return router;
    }
};