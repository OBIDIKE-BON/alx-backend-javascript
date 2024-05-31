import ClassRoom from '../0-classroom';
import initializeRooms from '../1-make_classrooms';

// test 0
const classroom = new ClassRoom(10);
console.log(classroom._maxStudentsSize);

// test 1
console.log(initializeRooms());
