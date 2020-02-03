import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'dom-company-infos',
  templateUrl: './company-infos.component.html',
  styleUrls: ['./company-infos.component.scss']
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
