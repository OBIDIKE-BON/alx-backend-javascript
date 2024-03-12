export default function cleanSet(set, start) {
  if (
    !set && !start && !(set instanceof Set) && typeof start !== 'string'
  ) {
    return '';
  }

  return [...set]
    .filter((element) => typeof element === 'string')
    .filter((element) => element.startsWith(start))
    .filter((element) => element.slice(start.length) !== element)
    .map((element) => element.slice(start.length))
    .join('-');
}
