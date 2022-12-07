import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from './components/courseItemComponent/course-item.component';
import { FormsModule } from '@angular/forms';
import { CustomBorderDirective } from '../shared/directives/custom-border.directive';
import { Route, RouterModule } from '@angular/router';
import { AddCourseModule } from './components/addCourse/add-course.module';
import { AddCourseComponent } from './components/addCourse/add-course.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';

const routes: Route[] = [
  {
    path: '',
    component: CoursesPageComponent
  },
  {
    path: 'add-course',
    data: { title: 'Add course', breadcrumbs: ['Courses', 'Add Course'] },
    component: AddCourseComponent,
  },
  {
    path: ':id',
    data: { title: 'Edit course', breadcrumbs: ['Courses', 'Edit Course'] },
    component: AddCourseComponent,
  },
];


@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    CustomBorderDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AddCourseModule,
    SharedPipesModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesPageModule { }
