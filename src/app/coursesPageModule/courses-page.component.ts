import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { COURSES_LIST } from 'src/app/constants/constant';
import { CourseFilterPipe } from '../shared/pipes/course-filter/course-filter.pipe';
import { Course } from './interfaces/course.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CoursesPageComponent implements OnInit {
  courses: Course[] = [];

  courseList: Course[] = [];
  searchText: string = '';
  isDataEmpty: boolean = false;

  constructor(private courseFilterPipe: CourseFilterPipe) {}

  ngOnInit(): void {
    this.courses = COURSES_LIST;
    this.courseList = this.courses;
    this.isDataEmpty = this.courseList.length === 0;
  }

  searchAction(): void {
    this.courseList = this.courseFilterPipe.transform(
      this.searchText,
      this.courses);
      this.isDataEmpty = this.courseList.length === 0;
  }

  deleteCourseById(courseId: number) {
    console.log(courseId);
  }

  trackFunction(index: any, item: { id: any }): any {
    return item.id;
  }
}
