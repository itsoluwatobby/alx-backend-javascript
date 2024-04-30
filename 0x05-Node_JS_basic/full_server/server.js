import http from 'http';
import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

const server = http.createServer(app);
app.use(express.json());

app.use('/', router);

server.listen(PORT);

export default app;
