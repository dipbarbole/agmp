import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { FieldAuthersComponent } from './field-authers/field-authers.component';
import { FieldDateComponent } from './field-date/field-date.component';
import { FieldDurationComponent } from './field-duration/field-duration.component';
import { FieldDescriptionComponent } from './field-description/field-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';


@NgModule({
  declarations: [
    AddCourseComponent,
    FieldAuthersComponent,
    FieldDateComponent,
    FieldDurationComponent,
    FieldDescriptionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule
  ],
  exports: [
    AddCourseComponent
  ]
})
export class AddCourseModule { }
