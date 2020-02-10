import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as Models from '@dom/common/dto';
import { Observable } from 'rxjs';
import { AppEntityServices, QueryPredicates, QueryPredicate } from '@dom/data/ngrx-data';

@Component({
  selector: 'dom-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  productsFormGroup: FormGroup;
  informationsFormGroup: FormGroup;
  optionsFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  contractFormGroup: FormGroup;

  products$: Observable<Models.Product[]> =
    this.services.productsCollectionService.getWithQueryPredicates(
      new QueryPredicates<Models.Product>(
        new QueryPredicate<Models.Product>('isHosting', '==', true),
        new QueryPredicate<Models.Product>('isOption', '==', false)
        )
    );

  constructor(private _formBuilder: FormBuilder, private readonly services: AppEntityServices) { }

  ngOnInit() {
    this.productsFormGroup = this._formBuilder.group({
      products: ['']
    });
    this.informationsFormGroup = this._formBuilder.group({
      informations: ['']
    });
    this.optionsFormGroup = this._formBuilder.group({
      options: ['']
    });
    this.paymentFormGroup = this._formBuilder.group({
      payment: ['']
    });
    this.contractFormGroup = this._formBuilder.group({
      contract: ['']
    });
  }

}
