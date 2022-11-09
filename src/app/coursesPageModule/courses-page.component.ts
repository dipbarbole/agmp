import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { COURSES_LIST } from 'src/app/constants/constant';
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

  constructor() {}

  ngOnInit(): void {
    this.courses = COURSES_LIST;
  }

  searchAction(): void {
    console.log('Searched Text:', this.searchText);
  }

  deleteCourseById(courseId: number) {
    console.log(courseId);
  }

  trackFunction(index: any, item: { id: any }): any {
    return item.id;
  }
}
