export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) return (arrayOfObjects.map((ele) => ele.id));
  return ([]);
}
