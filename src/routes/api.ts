import * as express from 'express';

export const register = (app: express.Application, route: string) => {
    app.get(`/${route}/test`, (req: any, res) => {
        res.json({message: 'api test success'});
    })
}