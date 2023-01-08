import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
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
  searchText: string = '';

  courses$: Observable<Course[]>;
  allCoursesLoaded$: Observable<boolean>;
  isDataEmpty$: Observable<boolean>;

  constructor(
    private courseFilterPipe: CourseFilterPipe,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses();
    this.isDataEmpty$ = this.courses$.pipe(
      map((courses) => courses.length === 0)
    );
  }

  onCourseSearch(searchInput: string) {
    this.allCoursesLoaded$ = searchInput ? of(true) : of(false);
    this.courses$ = this.coursesService.searchCourses(searchInput);
    this.isDataEmpty$ = this.courses$.pipe(
      map((courses) => courses.length === 0)
    );
  }

  loadMore() {
    this.courses$ = this.coursesService.loadMoreCourses();
    this.allCoursesLoaded$ = this.courses$.pipe(
      map(
        (courses) =>
          courses.length >= this.coursesService.getTotalCoursesCount()
      )
    );
  }

  addNewCourse() {
    this.router.navigateByUrl('/courses/new');
  }

  onEditCourse(courseId: number) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }

  onDeleteCourse(courseId: number) {
    this.coursesService
      .deleteCourse(courseId)
      .subscribe((_) => (this.courses$ = this.coursesService.getCourses()));
  }

  trackCourses(index: number, course: Course): number {
    if (!course) {
      return null;
    }
    return course.id;
  }

  ngOnDestroy() {
    this.coursesService.resetCoursesLoadedCount();
  }

  searchAction(): void {
    this.allCoursesLoaded$ = this.searchText ? of(true) : of(false);
    this.courses$ = this.coursesService.searchCourses(this.searchText);
    this.isDataEmpty$ = this.courses$.pipe(
      map(courses => courses.length === 0)
    );
  }

  deleteCourseById(courseId: number) {
    this.coursesService
    .deleteCourse(courseId)
    .subscribe((_) => (this.courses$ = this.coursesService.getCourses()));
    console.log('Course has been deleted with id ', courseId);
  }
}
