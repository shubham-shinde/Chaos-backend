import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';

import { SERVER_PORT } from './appconfig';
import route from './router';

const app = express();
app.use(cors());

route(app);

app.listen(SERVER_PORT, (err) => {
    if(err) console.log("server can't start due to ::::" + err);
    else console.log("server is running on the port ::::" + SERVER_PORT);
})