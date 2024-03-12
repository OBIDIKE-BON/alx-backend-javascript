import getListStudents from '../0-get_list_students';
import updateStudentGradeByCity from '../4-update_grade_by_city';
import createInt8TypedArray from '../5-typed_arrays';

console.log(createInt8TypedArray(10, 2, 556));

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }]));
