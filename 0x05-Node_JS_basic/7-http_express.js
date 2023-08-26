const process = require('process');
const express = require('express');
const fs = require('fs');
const port = '1245';
const fileName = process.argv[2];

const app = express();

function countStudents(path) {
  if (!fs.existsSync(path)) { throw new Error('Cannot load the database'); }

  let data = fs.readFileSync(path, 'utf8');
  data = data.split('\n');

  const students = data.map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname');

  const obj = {
    firstname: 0, lastname: 1, age: 2, field: 3,
  };

  const csStudents = [];
  const sweStudents = [];
  for (const student of students) {
    if (student[obj.field] === 'CS') { csStudents.push(student[obj.firstname]); } else if (student[obj.field] === 'SWE') { sweStudents.push(student[obj.firstname]); }
  }

  return { students, csStudents, sweStudents };
}

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'plain/text');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const { students, csStudents, sweStudents } = countStudents(fileName);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'plain/text');

  res.write('This is the list of our students\n');
  res.write(`Number of students: ${students.length}\n`);
  res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
  res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`);

  res.end();
});

app.listen(port);

module.exports = app;
