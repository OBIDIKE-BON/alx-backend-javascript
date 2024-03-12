export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  return [...set]
    .filter((element) => element.startsWith(startString) && typeof element === 'string')
    .map((element) => element.slice(startString.length))
    .join('-');
}
