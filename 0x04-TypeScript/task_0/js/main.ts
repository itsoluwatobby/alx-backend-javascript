interface Student{
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "Mark";
  lastName: "Thompson";
  age: 54;
  location: "Chicago";
};
const student2: Student = {
  firstName: "Tracy";
  lastName: "Bailey";
  age: 26;
  location: "Eygpt";
};

const studentList = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
})
