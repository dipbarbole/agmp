import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-field-date',
  templateUrl: './field-date.component.html',
  styleUrls: ['./field-date.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FieldDateComponent implements OnInit {
  date: FormControl;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.date = this.formGroupDirective.control.get('date') as FormControl;
  }
}
