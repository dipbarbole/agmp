import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Course } from '../../../interfaces/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course | any;
  @Output() courseId = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  deleteCourse(id: number) {
    this.courseId.emit(id);
  }

}
