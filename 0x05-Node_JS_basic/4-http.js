const http = require('http');

const PORT = 1245;

const server = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

server.listen(PORT);
