import { Teacher } from './Teacher';

export class Subject {
  protected teacher: Teacher;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
}
