const app = require('express')();
const countStudents = require('./3-sample_async');

const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(PORT);

module.exports = app;
