import { NgModule } from '@angular/core';
import { CourseDurationPipe } from './course-duration/course-duration.pipe';
import { CourseFilterPipe } from './course-filter/course-filter.pipe';
import { CourseOrderByPipe } from './course-order/course-order.pipe';

@NgModule({
  declarations: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
  ],
  providers: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
  ],
  exports: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
  ]
})
export class SharedPipesModule {}
