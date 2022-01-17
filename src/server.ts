
import dotenv from 'dotenv';
import express from 'express';
const app = express();

import * as routes from "./routes";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('TYPESCRIPT AND NODE');
});

routes.register(app);



// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log('⚡️[server]: SERVER LISTENING ON ' + PORT));
