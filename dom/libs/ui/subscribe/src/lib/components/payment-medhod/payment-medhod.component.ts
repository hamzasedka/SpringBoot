import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'dom-payment-medhod',
  templateUrl: './payment-medhod.component.html',
  styleUrls: ['./payment-medhod.component.scss']
})
export class PaymentMedhodComponent implements OnInit, ControlValueAccessor {
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
