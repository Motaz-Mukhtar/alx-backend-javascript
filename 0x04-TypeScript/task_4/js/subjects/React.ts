namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacherExp = this.teacher.experienceTeachingReact;
      if (typeof teacherExp === 'number' && teacherExp > 0) {
        return `Avaiable Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }

  }
}