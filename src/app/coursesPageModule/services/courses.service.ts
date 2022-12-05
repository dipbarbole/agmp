import { Injectable } from '@angular/core';
import { courses as Courses } from '../../constants/constant';
import { Course } from '../interfaces/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = Courses;

  constructor() {}

  // private newId(): number {
  //   return this.courses.length;
  // }

  getAll(): Course[] {
    return this.courses;
  }

  // getById(id: number): Course {
  //   return this.courses.find((course: Course) => course.id === id);
  // }

  // create(course: Course): Course {
  //   const newCourse = {
  //     id: this.newId,
  //     ...course
  //   };
  //   this.courses.push(newCourse);
  //   return newCourse;
  // }

  deleteCourse(id: number): void {
    const index = this.courses.findIndex((course: Course) => course.id === id);
    this.courses.splice(index, 1);
  }

  update(course: Course): Course {
    const index = this.courses.findIndex((courseItem: Course) => courseItem.id === course.id);
    this.courses[index] = course;
    return course;
  }
}
