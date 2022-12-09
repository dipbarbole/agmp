import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
  counter: number = 3;
  courses: Course[] = [];

  courseList: Course[] = [];
  searchText: string = '';
  isDataEmpty: boolean = false;

  constructor(
    private courseFilterPipe: CourseFilterPipe,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  get paginatedCourses(): Course[] {
    return this.courses.slice(0, this.counter);
  }

  ngOnInit(): void {
    this.refreshList();
    this.courseList = this.courses;
    this.isDataEmpty = this.courseList.length === 0;
  }

  addNewCourse() {
    this.router.navigateByUrl('/courses/new');
  }

  onEditCourse(courseId: number) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }

  searchAction(): void {
    this.courseList = this.courseFilterPipe.transform(
      this.searchText,
      this.courses
    );
    this.isDataEmpty = this.courseList.length === 0;
  }

  deleteCourseById(courseId: number) {
    this.coursesService.deleteCourse(courseId);
    console.log('Course has been deleted with id ', courseId);
  }

  loadMore(): void {
    console.log('Load more');
    this.counter += 3;
    this.refreshList();
  }

  refreshList(): void {
    this.courses = this.coursesService.getAll();
  }

}
