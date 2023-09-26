export default function createIteratorObject(report) {
  const arr = [];

  for (const dep of Object.keys(report.allEmployees)) {
    arr.push(...report.allEmployees[dep]);
  }

  return arr;
}