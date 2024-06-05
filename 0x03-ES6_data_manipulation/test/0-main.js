import getListStudents from '../0-get_list_students';
import updateStudentGradeByCity from '../4-update_grade_by_city';
import createInt8TypedArray from '../5-typed_arrays';
import setFromArray from '../6-set';
import hasValuesFromArray from '../7-has_array_values';
import cleanSet from '../8-clean_set';
import updateUniqueItems from '../10-update_uniq_items';
import groceriesList from '../9-groceries_list';
import { queryAPI, weakMap } from '../100-weak';

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

const map = groceriesList();
console.log(map);

updateUniqueItems(map);
console.log(map);

console.log(groceriesList());

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

console.log(createInt8TypedArray(10, 2, 556));

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), 'San Francisco', [{ studentId: 5, grade: 97 }]));
