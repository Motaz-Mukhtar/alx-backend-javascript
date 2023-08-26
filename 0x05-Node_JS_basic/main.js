const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

console.log('\n');
console.log('\n');


const dict = countStudents('database.csv')


dict.then((value) => console.log(value))
