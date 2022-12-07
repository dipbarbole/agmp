import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-field-duration',
  templateUrl: './field-duration.component.html',
  styleUrls: ['./field-duration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FieldDurationComponent implements OnInit {
  duration: FormControl;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.duration = this.formGroupDirective.control.get(
      'duration'
    ) as FormControl;
  }
}
