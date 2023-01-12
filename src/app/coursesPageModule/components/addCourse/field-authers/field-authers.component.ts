import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-field-authers',
  templateUrl: './field-authers.component.html',
  styleUrls: ['./field-authers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FieldAuthersComponent implements OnInit {

  authors: FormControl;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.authors = this.formGroupDirective.control.get(
      'authors'
    ) as FormControl;
  }

}
