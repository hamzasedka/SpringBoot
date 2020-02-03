import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'dom-expedition-address',
  templateUrl: './expedition-address.component.html',
  styleUrls: ['./expedition-address.component.scss']
})
export class ExpeditionAddressComponent implements OnInit, ControlValueAccessor {
  value: any;

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
