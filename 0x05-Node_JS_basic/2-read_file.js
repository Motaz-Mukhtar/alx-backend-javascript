const fs = require('fs');

function countStudents (path) {
  if (!fs.existsSync(path)) { throw new Error('Cannot load the database'); }

  let data = fs.readFileSync(path, 'utf8');
  data = data.split('\n');

  const students = data.map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname');

  const obj = { firstname: 0, lastname: 1, age: 2, filed: 3 };

  const csStudents = [];
  const sweStudents = [];
  for (const student of students) {
    if (student[obj.filed] === 'CS') { csStudents.push(student[obj.firstname]); } else if (student[obj.filed] === 'SWE') { sweStudents.push(student[obj.firstname]); }
  }

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
}

module.exports = countStudents;
