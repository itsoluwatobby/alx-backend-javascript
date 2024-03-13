interface Teacher{
  [index: string]: boolean | string | number;
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
};

interface Directors extends Teacher{
  numberOfReports: number;
};

interface printTeacherFunction{
  printTeacher: (firstName: string, lastName: string) => string;
};

function printTeacher(firstName, lastName): string {
  return `${firstName[0].toUpperCase()}.${lastName}`;
}

// Define an interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
