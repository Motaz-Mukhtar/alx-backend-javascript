export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((ele) => (ele.location === city ? ele : ''));
}
