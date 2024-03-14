// Subject.ts

import { Teacher } from "./Teacher";

namespace Subjects {
  export class Subject {
    private _teacher: Teacher | null;

    constructor() {
      this._teacher = null;
    }

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}  
