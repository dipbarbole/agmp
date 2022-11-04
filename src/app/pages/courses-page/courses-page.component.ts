import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  courseList: Course[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
