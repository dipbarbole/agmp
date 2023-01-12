import {
  Component,
  forwardRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-field-date',
  templateUrl: './field-date.component.html',
  styleUrls: ['./field-date.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldDateComponent),
      multi: true,
    },
  ],
})
export class FieldDateComponent implements OnInit {
  date: FormControl;
  dateValue: Date;
  onChange: () => void;
  onTouched: () => void;
  disabled: boolean;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.date = this.formGroupDirective.control.get('date') as FormControl;
  }

  writeValue(value: Date): void {
    this.dateValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
