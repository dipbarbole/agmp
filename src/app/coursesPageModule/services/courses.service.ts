import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { URLS } from 'src/app/shared/urls/urls';
import { courses as Courses } from '../../constants/constant';
import { Course } from '../interfaces/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = Courses;

  private coursesLoadedCount = 5;
  private totalCoursesCount = 0;

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>(URLS.ALL_COURSES)
      .pipe(tap((courses) => (this.totalCoursesCount = courses.length)));
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(
      URLS.COURSES_PAGING(0, this.coursesLoadedCount)
    );
  }

  loadMoreCourses(): Observable<Course[]> {
    this.coursesLoadedCount += 5;
    return this.getCourses();
  }

  searchCourses(searchText: string): Observable<Course[]> {
    if (searchText) {
      return this.http.get<Course[]>(URLS.COURSES_SEARCH(searchText));
    }
    return this.getCourses();
  }

  getTotalCoursesCount() {
    return this.totalCoursesCount;
  }

  resetCoursesLoadedCount() {
    this.coursesLoadedCount = 5;
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(URLS.GET_COURSE_INFO(courseId));
  }

  createCourse(course: Course) {
    return this.http.post(URLS.CREATE_COURSE, course);
  }

  updateCourse(updatedCourse: Course) {
    return this.http.patch(URLS.EDIT_COURSE(updatedCourse.id), updatedCourse);
  }

  deleteCourse(courseId: number) {
    return this.http.delete(URLS.DELETE_COURSE(courseId));
  }

  // private newId(): number {
  //   return this.courses.length;
  // }

  getAll(): Course[] {
    return this.courses;
  }

  getById(id: number): any {
    const courseData = this.courses.find((course: Course) => course.id === id);
    return courseData;
  }

  // create(course: Course): Course {
  //   const newCourse = {
  //     id: this.newId,
  //     ...course
  //   };
  //   this.courses.push(newCourse);
  //   return newCourse;
  // }

  // createCourse(course: Course) {
  //   console.log('Creating new course');
  //   course.id = this.courses.length + 1;
  //   const updatedCourses = [course, ...this.courses];
  //   this.courses = updatedCourses;
  // }

  // deleteCourse(id: number): void {
  //   const index = this.courses.findIndex((course: Course) => course.id === id);
  //   this.courses.splice(index, 1);
  // }

  // update(course: Course): Course {
  //   const index = this.courses.findIndex((course: Course) => course.id === course.id);
  //   this.courses[index] = course;
  //   return course;
  // }
}
