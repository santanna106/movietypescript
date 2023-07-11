require("dotenv").config();

import express from 'express';
import config from 'config';

import router from './router';
import db from '@config/db';

import Logger from '@config/logger';

const app = express();

app.use(express.json());
app.use("/api/",router);

const port = config.get<number>("port");

app.listen(3000, async () => {
    await db();
    Logger.info(`Aplicação está funcionando na porta : ${port}`);
})
