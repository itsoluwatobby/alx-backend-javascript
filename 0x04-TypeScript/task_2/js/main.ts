interface DirectorInterface {
  workFromHome: () => string;
  getToWork: () => string;
  workDirectorTasks: () => string;
};

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
};

class Director implements DirectorInterface {

  workFromHome() {
    return 'Working from home';
  }
  getToWork() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {

  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: string | number): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Task 6
function isDirector(employee) {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) return new Director().workDirectorTasks();
  else return new Teacher().workTeacherTasks();
}

// Task 7
type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects) {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
