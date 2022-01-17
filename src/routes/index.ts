import * as express from 'express';
import * as api from './api';

export const register = ( app: express.Application ) => {
    app.get('/test', (req: any, res) => {
        res.send({message: "test success"});
    });

    api.register(app, 'api');
}