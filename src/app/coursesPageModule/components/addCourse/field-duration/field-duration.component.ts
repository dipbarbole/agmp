import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-field-duration',
  templateUrl: './field-duration.component.html',
  styleUrls: ['./field-duration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FieldDurationComponent implements OnInit {
  length: FormControl;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.length = this.formGroupDirective.control.get(
      'length'
    ) as FormControl;
  }
}
