export default function hasValuesFromArray(set, array) {
  return new Set([...set, ...array]).size === set.size;
}
