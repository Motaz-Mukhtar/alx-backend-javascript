export default function createIteratorObject(report) {
  const arr = [];

  for (let dep of Object.keys(report.allEmployees)) {
    arr.push(...report.allEmployees[dep]);
  }

  return arr;
}