export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const index = array.indexOf(idx);
    array.splice(index, 1, appendString + idx);
  }

  return array;
}
