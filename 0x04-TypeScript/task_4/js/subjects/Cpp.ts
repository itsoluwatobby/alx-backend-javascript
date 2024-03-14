// Cpp.ts

import { Teacher } from "./Teacher";
import { Subject } from "./Subject";

declare module "./Teacher" {
  interface Teacher {
    experienceTeachingC?: number;
  }
}

namespace Subjects {
  export class Cpp extends Subject {
    constructor() {
      super();
    }

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingC) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

