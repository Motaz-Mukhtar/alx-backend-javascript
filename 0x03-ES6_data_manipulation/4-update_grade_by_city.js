export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  newGrades.map((grade) => {
    studentsList.filter((student) => {
      if (student.id === grade.studentId) student.grade = grade.grade;
      else if (student.grade === undefined) student.grade = 'N/A';
    });
  });
  return studentsList;
}
