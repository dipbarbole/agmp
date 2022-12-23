import { NgModule } from '@angular/core';
import { CourseAuthorsPipe } from './course-authors/course-authors.pipe';
import { CourseDurationPipe } from './course-duration/course-duration.pipe';
import { CourseFilterPipe } from './course-filter/course-filter.pipe';
import { CourseOrderByPipe } from './course-order/course-order.pipe';

@NgModule({
  declarations: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
    CourseAuthorsPipe
  ],
  providers: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
    CourseAuthorsPipe
  ],
  exports: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
    CourseAuthorsPipe
  ]
})
export class SharedPipesModule {}
