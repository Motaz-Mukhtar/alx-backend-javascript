const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'plain/text');
  switch (req.url) {
    case '/students':
      countStudents('database.csv');
      res.end('This is the list of our students');
      break;
    case '/':
      res.end('Hello Holberton School!');
      break;
  }
}).listen(port);

module.exports = app;
