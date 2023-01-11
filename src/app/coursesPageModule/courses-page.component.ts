import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, Observable, of } from 'rxjs';
import { AppState } from '../store/state/app.state';
import { Course } from './interfaces/course.model';
import { Store } from '@ngrx/store';
import {
  DeleteCourse,
  GetCourses,
  LoadMoreCourses,
  SearchCourses,
} from '../store/actions/courses.actions';
import {
  coursesSelector,
  totalCoursesCountSelector,
} from '../store/selectors/courses/courses.selectors';

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
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCourses());
    this.courses$ = this.store.select(coursesSelector);
    this.isDataEmpty$ = this.courses$.pipe(
      map((courses) => courses.length === 0)
    );
  }

  onCourseSearch(searchInput: string) {
    this.allCoursesLoaded$ = searchInput ? of(true) : of(false);
    this.store.dispatch(new SearchCourses(searchInput));
  }

  loadMore() {
    this.store.dispatch(new LoadMoreCourses());
    this.allCoursesLoaded$ = combineLatest([
      this.courses$,
      this.store.select(totalCoursesCountSelector),
    ]).pipe(
      map(([courses, totalCoursesCount]) => {
        return courses.length >= totalCoursesCount;
      })
    );
  }

  addNewCourse() {
    this.router.navigateByUrl('/courses/new');
  }

  onEditCourse(courseId: number) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }

  trackCourses(index: number, course: Course): number {
    if (!course) {
      return null;
    }
    return course.id;
  }

  deleteCourseById(courseId: number) {
    this.store.dispatch(new DeleteCourse(courseId));
  }
}
