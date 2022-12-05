import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CourseFilterPipe } from '../shared/pipes/course-filter/course-filter.pipe';
import { Course } from './interfaces/course.model';
import { CoursesService } from './services/courses.service';

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

  constructor(private courseFilterPipe: CourseFilterPipe, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.refreshList();
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
    this.coursesService.deleteCourse(courseId);
    console.log('Course has been deleted with id ', courseId);
  }

  loadMore(): void {
    console.log('Load more');
  }

  refreshList(): void {
    this.courses = this.coursesService.getAll();
  }

  trackFunction(index: any, item: { id: any }): any {
    return item.id;
  }
}
