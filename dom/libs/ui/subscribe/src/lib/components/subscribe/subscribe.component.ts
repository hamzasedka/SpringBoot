import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as Models from '@dom/common/dto';
import { Observable, combineLatest, of } from 'rxjs';
import { AppEntityServices, QueryPredicates, QueryPredicate } from '@dom/data/ngrx-data';
import { select } from '@ngrx/store';
import { getHostingPriceCards } from '../../store/selectors';
import { map, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@dom/common/core';
import { upsertHostingOrderItem } from '../../store/actions';

@Component({
  selector: 'dom-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit, OnDestroy {

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

  pricecards$ = this.services.productsCollectionService.store.pipe(select(getHostingPriceCards));

  get selectedProductForm() {
    return this.productsFormGroup.get('selectedProduct');
  }

  vm$: Observable<any>;

  constructor(private formBuilder: FormBuilder, private readonly services: AppEntityServices) { }

  ngOnInit() {
    this.productsFormGroup = this.formBuilder.group({
      selectedProduct: [''],
      selectedPriceCard: [{}]
    });
    this.informationsFormGroup = this.formBuilder.group({
      informations: ['']
    });
    this.optionsFormGroup = this.formBuilder.group({
      options: ['']
    });
    this.paymentFormGroup = this.formBuilder.group({
      payment: ['']
    });
    this.contractFormGroup = this.formBuilder.group({
      contract: ['']
    });

    this.vm$ = combineLatest
      (
        [
          this.products$,
          this.pricecards$
        ]
      ).pipe(map(([products, pricecards]) => ({ products, pricecards })), tap(console.log));

      this.selectedProductForm.valueChanges.pipe(takeUntilDestroyed(this)).subscribe(this.setHostingOrderItem.bind(this))
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed
  }

  setHostingOrderItem(productId: string){
    this.services.productsCollectionService.store.dispatch(upsertHostingOrderItem({productId}));
  }
}
