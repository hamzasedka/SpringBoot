import { Component, OnInit, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dom-company-infos',
  templateUrl: './company-infos.component.html',
  styleUrls: ['./company-infos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CompanyInfosComponent),
      multi: true
    }
  ]
})
export class CompanyInfosComponent implements OnInit, ControlValueAccessor {
  value;
  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
