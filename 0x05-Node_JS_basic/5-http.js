const app = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

const server = app.createServer(async (req, res) => {
  if (req.url === '/') res.end('Hello Holberton School!');
  else if (req.url === '/students') {
    const countOfStudents = await countStudents(process.argv[2]);
    res.end(`This is the list of our students\n${countOfStudents}`);
  }
});

server.listen(PORT);

module.exports = app;
