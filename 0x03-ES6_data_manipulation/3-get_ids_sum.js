export default function getStudentIdsSum(studentsList) {
  const sum = studentsList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return (sum);
}
