import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dom-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  adresseFormGroup: FormGroup;
  informationFormGroup: FormGroup;
  optionsFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  contractFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.adresseFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.informationFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.optionsFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.paymentFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.contractFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
  }

}
