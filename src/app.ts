import express from 'express';
import config from 'config';

import router from './router';
import connect from '@config/db';

const app = express();

app.use(express.json());
app.use("/api/",router);

const port = config.get<number>("port");

app.listen(3000, async () => {
    await connect();
    console.log(`Aplicação está funcionando na porta : ${port}`);
})
