import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../interfaces/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourseComponent implements OnInit, AfterViewInit {
  formTitle: string = 'New Course';
  newCourseForm: FormGroup;
  title: FormControl;
  description: FormControl;
  duration: FormControl;
  date: FormControl;
  authors: FormControl;

  courseId: number;
  courseData: Course;

  constructor(
    private router: Router,
    private courseService: CoursesService,
    private routeActive: ActivatedRoute
  ) {
    this.courseId = Number(this.routeActive.snapshot.paramMap.get('id'));
    if (this.courseId) {
      this.formTitle = 'Edit Course'
      this.courseData = this.courseService.getById(this.courseId);
    }
  }

  ngOnInit() {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);
    this.authors = new FormControl([], Validators.required);

    this.newCourseForm = new FormGroup({
      title: this.title,
      description: this.description,
      duration: this.duration,
      date: this.date,
      authors: this.authors,
    });
  }

  ngAfterViewInit() {
    if (this.courseId) {
      setTimeout(() => {
        this.courseData.date = this.dateToYMD(this.courseData.creationDate);
        this.newCourseForm.patchValue(this.courseData);
      }, 0);
    }
  }

  dateToYMD(end_date: Date) {
    var ed = new Date(end_date);
    var d = ed.getDate();
    var m = ed.getMonth() + 1;
    var y = ed.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

  createCourse() {
    const formValue = this.newCourseForm.value;
    const newCourse: Course = {
      ...formValue,
      creationDate: new Date(formValue.date),
      authors: [formValue.authors]
    };

    if (this.courseId) {
      newCourse.id = this.courseId;
      this.courseService.update(newCourse);
    } else {
      this.courseService.createCourse(newCourse);
    }
   
    this.router.navigate(['/courses']);
  }

  cancelCourseCreation() {
    if (!this.newCourseForm.dirty) {
      this.router.navigate(['/courses']);
      return;
    }
    if (confirm('Do you really want to cancel course creation?')) {
      this.router.navigate(['/courses']);
    }
  }
}
