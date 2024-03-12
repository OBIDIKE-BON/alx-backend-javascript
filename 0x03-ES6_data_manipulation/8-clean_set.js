export default function cleanSet(set, start) {
  if (
    !set && !start && !(set instanceof Set) && typeof start !== 'string'
  ) {
    return '';
  }

  return [...set]
    .filter((s) => typeof s === 'string' && s.startsWith(start) && s.slice(start.length) !== s)
    .map((element) => element.slice(start.length))
    .join('-');
}
