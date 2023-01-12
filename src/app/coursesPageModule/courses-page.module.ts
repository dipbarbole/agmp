import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page.component';
import { CourseItemComponent } from './components/courseItemComponent/course-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomBorderDirective } from '../shared/directives/custom-border.directive';
import { Route, RouterModule } from '@angular/router';
import { AddCourseModule } from './components/addCourse/add-course.module';
import { AddCourseComponent } from './components/addCourse/add-course.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { SearchCourseComponent } from './components/searchCourseComponent/search-course.component';

const routes: Route[] = [
  {
    path: '',
    data: { title: 'Courses', breadcrumbs: ['Courses'] },
    component: CoursesPageComponent
  },
  {
    path: 'new',
    data: { title: 'New Course', breadcrumbs: ['Courses', 'New Course'] },
    component: AddCourseComponent,
  },
  {
    path: ':id',
    data: { title: 'Edit Course', breadcrumbs: ['Courses', 'Edit Course'] },
    component: AddCourseComponent,
  },
];


@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    CustomBorderDirective,
    SearchCourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AddCourseModule,
    SharedPipesModule
  ],
  exports: [
    CoursesPageComponent,
    SearchCourseComponent
  ]
})
export class CoursesPageModule { }
