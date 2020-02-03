import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      firstCtrl: ['', Validators.required]
    });
    this.informationFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.optionsFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.paymentFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.contractFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
