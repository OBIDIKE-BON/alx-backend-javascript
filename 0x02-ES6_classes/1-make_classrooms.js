import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room1 = new ClassRoom(20);
  const room2 = new ClassRoom(15);
  const room3 = new ClassRoom(10);
  return [room1, room2, room3];
}
