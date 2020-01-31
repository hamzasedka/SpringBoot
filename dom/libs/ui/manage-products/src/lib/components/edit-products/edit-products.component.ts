import { Component, OnInit, Optional, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@dom/ui/common';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@dom/common/core';
import { AppEntityServices } from '@dom/data/ngrx-data';
import * as Models from '@dom/common/dto';

@Component({
  selector: 'dom-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit, OnDestroy {

  formRegister: FormGroup;

  private readonly editProduct$ = this.store.pipe(select(Store.getEditProduct)).pipe(
    tap(product => {
      console.log('product received > ', product);
      console.log('product received uid > ', product?.uid);
      if (!!product) {
        const clone = {...product};
        delete clone.uid; // never remove from original object reference
        this.formRegister.setValue(clone);
      }
    })
  );

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  constructor(
    private readonly fb: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<EditProductsComponent>,
    private readonly notificationService: NotificationService,
    private readonly store: NgRxStore<Store.ProductsAllFeaturesState>,
    private readonly entityServices: AppEntityServices
  ) {
    this.buildFormRegister();
    combineLatest([this.editProduct$, this.formRegister.valueChanges])
      .pipe(
        map(([product, changes]) => ({ product, changes }))
      ).pipe(takeUntilDestroyed(this)).subscribe(r => {
        console.log('refresh view : ', r)
        this.vmBehavior.next(r);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed
  }


  onCloseClick(): void {
    this.dialogRef?.close();
  }

  async onSave(initialProduct: Models.Product){
    console.log('initialProduct to upsert: ', initialProduct);
    const product = {...this.formRegister.value as Models.Product, uid: initialProduct?.uid};
    console.log('product to upsert: ', product);
    await this.entityServices.productsCollectionService.upsert(product).pipe(
      tap(p =>{
        this.store.dispatch(Store.setEditProduct({ productId: p?.uid }));
        this.notificationService.error('Enregistré.');
      })
    ).toPromise();
  }

  private buildFormRegister() {
    this.formRegister = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required])],
        description: [''],
        priceExcludeTaxe: [undefined, Validators.compose([Validators.required, Validators.min(0.1)])],
        priceIncludeTaxe: [undefined, Validators.compose([Validators.required, Validators.min(0.1)])],
        strikethroughPrice: [undefined, Validators.compose([Validators.required, Validators.min(0.1)])],
        isOption: [false],
        canApplyPromotion: [false]
/*         ,
        reccurence: ['', Validators.compose([Validators.required])],
        contractCommitment: [undefined, Validators.compose([Validators.required])],
        contractCommitmentUnit: ['', Validators.compose([Validators.required])] */
      }
    );
  }
}
