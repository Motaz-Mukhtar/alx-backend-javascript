const http = require('http');
const fs = require('fs');
const port = 1245;


async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.split('\n');

  const students = data.map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname');

  const obj = {
    firstname: 0, lastname: 1, age: 2, filed: 3,
  };

  const csStudents = [];
  const sweStudents = [];
  for (const student of students) {
    if (student[obj.filed] === 'CS') { csStudents.push(student[obj.firstname]); } else if (student[obj.filed] === 'SWE') { sweStudents.push(student[obj.firstname]); }
  }

  return { students, csStudents, sweStudents };
}


const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'plain/text');
  if ( req.url === '/' ) {
    res.write('Hello Holberton School!\n');
    res.end();
  }
  else if ( req.url === '/students' ) {
    res.write('This is the list of our students\n');
    countStudents('database.csv').then((value) => {
      res.write(`Number of students: ${value.students.length}\n`);
      res.write(`Number of students in CS: ${value.csStudents.length}. List: ${value.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${value.sweStudents.length}. List: ${value.sweStudents.join(', ')}\n`);
      res.end();
    })
  }
}).listen(port);

module.exports = app;
