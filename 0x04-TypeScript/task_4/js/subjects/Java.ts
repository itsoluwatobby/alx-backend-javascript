// React.ts

import { Teacher } from "./Teacher";
import { Subject } from "./Subject";

declare module "./Teacher" {
  interface Teacher {
    experienceTeachingJava?: number;
  }
}

namespace Subjects {

  export class Java extends Subject {
    constructor() {
      super();
    }

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
 
    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingJava) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

