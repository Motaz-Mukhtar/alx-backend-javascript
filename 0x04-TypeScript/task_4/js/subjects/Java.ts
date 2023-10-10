namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const teacherExp = this.teacher.experienceTeachingJava;
      if (typeof teacherExp === 'number' && teacherExp > 0) {
        return `Avaiable Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}