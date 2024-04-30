const http = require('http');
const app = require('express')();

const PORT = 1245;

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

server.listen(PORT);

module.exports = app;
