import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseAuthorsPipe } from 'src/app/shared/pipes/course-authors/course-authors.pipe';
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
  name: FormControl;
  description: FormControl;
  length: FormControl;
  date: FormControl;
  authors: FormControl;

  courseId: number;
  courseData: Course;

  constructor(
    private router: Router,
    private courseService: CoursesService,
    private routeActive: ActivatedRoute,
    private courseAuthorsPipe: CourseAuthorsPipe
  ) {
    this.courseId = Number(this.routeActive.snapshot.paramMap.get('id'));
    if (this.courseId) {
      this.formTitle = 'Edit Course';
      this.courseService.getCourseById(this.courseId).subscribe((course) => {
        if (course) {
          this.courseData = course;
        }
      });
    }
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.length = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);
    this.authors = new FormControl([]);

    this.newCourseForm = new FormGroup({
      name: this.name,
      description: this.description,
      length: this.length,
      date: this.date,
      authors: this.authors,
    });
  }

  ngAfterViewInit() {
    if (this.courseId) {
      setTimeout(() => {
        this.newCourseForm.patchValue({
          name: this.courseData.name,
          description: this.courseData.description,
          length: this.courseData.length,
          date: this.dateToYMD(this.courseData.date),
          authors: this.courseAuthorsPipe.transform(this.courseData.authors),
        });
      }, 10);
    }
  }

  dateToYMD(end_date: Date) {
    var ed = new Date(end_date);
    var d = ed.getDate();
    var m = ed.getMonth() + 1;
    var y = ed.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
  }

  createCourse() {
    const formValue = this.newCourseForm.value;
    const newCourse: Course = {
      ...formValue,
      authors: this.transformCourseAuthorsToAdd(formValue.authors),
    };

    if (this.courseId) {
      newCourse.id = this.courseId;
      newCourse.authors = this.transformCourseAuthors(formValue.authors);
      this.courseService.updateCourse(newCourse).subscribe();
    } else {
      this.courseService.createCourse(newCourse).subscribe();
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

  transformCourseAuthors(authors: string) {
    return authors.split(',').map((authorName: string, index: number) => {
      const courseAuthor = this.courseData.authors.find((author) => {
        const name = `${author.name}`;
        return name === authorName;
      });
      return {
        id: courseAuthor ? courseAuthor.id : index + 1,
        name: authorName.trim(),
      };
    });
  }

  transformCourseAuthorsToAdd(authors: string) {
    return authors.split(',').map((author: string, index: number) => {
      return {
        id: index + 1,
        name: author.trim(),
      };
    });
  }
}
