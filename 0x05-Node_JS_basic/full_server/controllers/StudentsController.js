const readDatabase = require('../utils.js');

class StudentsController {
  static getAllStudents (request, response) {
    readDatabase('./database.csv').then((value) => {
      response.statusCode = 200;
      const { csStudents, sweStudents } = value;

      response.write('This is the list of our students\n');
      response.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      response.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`);
    }).catch((err) => {
      response.statusCode = 500;
      response.write(`${err.message}\n`);
    }).finally(() => {
      response.end();
    });
  }

  static getAllStudentsByMajor (request, response) {
    readDatabase('./database.csv').then((value) => {
      response.statusCode = 200;
      const { csStudents, sweStudents } = value;
      if (request.params.major === 'CS') {
        response.write(`List: ${csStudents.join(', ')}\n`);
      } else if (request.params.major === 'SWE') {
        response.write(`List: ${sweStudents.join(', ')}\n`);
      } else {
        response.statusCode = 500;
        response.write('Major parameter must be CS or SWE\n');
      }
    }).catch((err) => {
      response.statusCode = 500;
      response.write(`${err.message}\n`);
    }).finally(() => {
      response.end();
    });
  }
}

export default StudentsController;
