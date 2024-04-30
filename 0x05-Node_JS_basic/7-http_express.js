const http = require('http');
const app = require('express')();
const countStudents = require('./3-read_file_async');

const PORT = 1245;

const server = http.createServer(app);

app.get('/', async (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const countOfStudents = await countStudents(process.argv[2]);
  res.send(`This is the list of our students\n${countOfStudents}`);
});

server.listen(PORT);

module.exports = app;
