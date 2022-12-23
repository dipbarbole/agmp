import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Course } from '../../interfaces/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() courseId = new EventEmitter<number>();
  @Output() editCourseId = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteCourse(id: number) {
    if (confirm('Do you really want to delete this course')) {
      this.courseId.emit(id);
    }
  }

  editCourse(id: number) {
    this.editCourseId.emit(id);
  }
}
