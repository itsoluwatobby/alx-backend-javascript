const http = require('http');
const countStudents = require('./3-sample_async');

const hostname = '127.0.0.1';
const PORT = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') res.end('Hello Holberton School!');

  else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(PORT, hostname);

module.exports = app;
