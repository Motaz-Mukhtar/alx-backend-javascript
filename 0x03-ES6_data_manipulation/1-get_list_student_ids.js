export default getListStudentIds(arrayOfObjects)
{
	if ! Array.isArray(arrayOfObjects) return [];
	return arrayOfObjects.map((ele) => ele.id);
}
