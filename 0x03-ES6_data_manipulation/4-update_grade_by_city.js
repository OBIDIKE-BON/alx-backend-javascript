export default function updateStudentGradeByCity(array, city, newGrade) {
  return array.filter((student) => student.location === city)
    .map((student) => {
      const newStudent = { ...student };
      const foundStudent = newGrade.find((st) => st.studentId === student.id);
      newStudent.grade = foundStudent !== undefined ? foundStudent.grade : 'N/A';
      return newStudent;
    });
}
