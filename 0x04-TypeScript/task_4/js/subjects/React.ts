// React.ts

import { Teacher } from "./Teacher";
import { Subject } from "./Subject";

declare module "./Teacher" {
  interface Teacher {
    experienceTeachingReact?: number;
  }
}

namespace Subjects {

  export class React extends Subject {
    constructor() {
      super();
    }

    getRequirements(): string {
      return "Here is the list of requirements for React";
    }
 
    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingReact) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

