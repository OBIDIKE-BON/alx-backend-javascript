export default function createInt8TypedArray(lenght, position, value) {
  const bufer = new ArrayBuffer(lenght);
  const dataView = new DataView(bufer);
  if (position >= lenght) {
    throw new Error('Position outside range');
  } else {
    dataView.setInt8(position, value);
    return dataView;
  }
}
