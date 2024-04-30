import express from 'express';
import appRouter from './routes/index';

const app = express();
const hostname = '127.0.0.1';
const PORT = 1245;

app.use('/', appRouter);

app.listen(PORT, hostname);

export default app;
