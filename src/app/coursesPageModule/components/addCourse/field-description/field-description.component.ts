import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-field-description',
  templateUrl: './field-description.component.html',
  styleUrls: ['./field-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FieldDescriptionComponent implements OnInit {

  description: FormControl;
  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.description = this.formGroupDirective.control.get(
      'description'
    ) as FormControl;
  }

}
