import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from './components/courseItemComponent/course-item.component';
import { FormsModule } from '@angular/forms';
import { CustomBorderDirective } from '../shared/directives/custom-border.directive';
import { CourseDurationPipe } from '../shared/pipes/course-duration/course-duration.pipe';
import { CourseOrderByPipe } from '../shared/pipes/course-order/course-order.pipe';
import { CourseFilterPipe } from '../shared/pipes/course-filter/course-filter.pipe';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    CustomBorderDirective,
    CourseDurationPipe,
    CourseOrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoursesPageComponent
  ],
  providers: [CourseFilterPipe],
})
export class CoursesPageModule { }
