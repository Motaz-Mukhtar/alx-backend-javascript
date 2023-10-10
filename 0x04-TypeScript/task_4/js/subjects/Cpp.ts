namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const teacherExp = this.teacher.experienceTeachingC;
      if (typeof teacherExp === 'number' && teacherExp > 0) {
        return `Avaiable Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}