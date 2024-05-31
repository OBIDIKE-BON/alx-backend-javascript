import ClassRoom from '../0-classroom';
import initializeRooms from '../1-make_classrooms';
import HolbertonCourse from '../2-hbtn_course';

// test 2
const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'thon 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err);
}

// test 0
const classroom = new ClassRoom(10);
console.log(classroom._maxStudentsSize);

// test 1
console.log(initializeRooms());
