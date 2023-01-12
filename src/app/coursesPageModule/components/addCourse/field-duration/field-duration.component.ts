import { Component, forwardRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-field-duration',
  templateUrl: './field-duration.component.html',
  styleUrls: ['./field-duration.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldDurationComponent),
      multi: true
    }
  ]
})
export class FieldDurationComponent implements OnInit {
  length: FormControl;
  value: number;
  onChange: () => void;
  onTouched: () => void;
  disabled: boolean;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.length = this.formGroupDirective.control.get(
      'length'
    ) as FormControl;
  }

  writeValue(value: number): void {
    this.value = value ? value : 0;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
