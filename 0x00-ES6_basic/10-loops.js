export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    const index = array.indexOf(item);
    array[index] = appendString + item; // eslint-disable-line no-param-reassign
  }

  return array;
}
