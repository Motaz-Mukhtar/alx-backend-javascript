export default function hasValuesFromArray(set, array) {
  let bool = false;
  for (const i of array) {
    if (set.has(i)) bool = true;
    else bool = false;
  }
  return bool;
}
