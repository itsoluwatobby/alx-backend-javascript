export default function updateStudentGradeByCity(studentList, city, newGrade) {
  return studentList
    .filter((obj) => obj.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
	  student.grade = studentGrade.grade;
        }

        if (!student.grade) {
	  student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
