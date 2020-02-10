import { Component, OnInit, Optional, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NotificationService } from '@dom/ui/common';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@dom/common/core';
import { AppEntityServices } from '@dom/data/ngrx-data';
import * as Models from '@dom/common/dto';
import { Reccurences } from '@dom/common/dto';

@Component({
  selector: 'dom-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit, OnDestroy {

  formRegister: FormGroup;

  private readonly editProduct$ = this.store.pipe(select(Store.getEditProduct)).pipe(
    tap(product => {
      if (!!product) {
        const clone = { ...product };
        delete clone.uid; // never remove from original object reference
        delete clone.deleted;
        this.formRegister.setValue(clone);
      }
    })
  );

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  get priceCardsForm(): AbstractControl {
    return this.formRegister.get('priceCards');
  }

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

  onAddPriceCards(product: Models.Product, event: MouseEvent) {
    event.preventDefault();
    const priceCards: Models.PriceCard[] = this.priceCardsForm.value as [Models.PriceCard];
    priceCards.push({
      canApplyPromotion : true,
      contractCommitment: 24,
      contractCommitmentUnit: Reccurences.Mounth,
      currencySymbol: '€'
    });
    this.priceCardsForm.setValue(priceCards);
  }

  async onSave(initialProduct: Models.Product) {
    const product = { ...this.formRegister.value as Models.Product, uid: initialProduct?.uid };
    await this.entityServices.productsCollectionService.upsert(product).pipe(
      tap(p => {
        this.store.dispatch(Store.setEditProduct({ productId: p?.uid }));
        this.notificationService.success('Enregistré.');
      })
    ).toPromise();
  }

  private buildFormRegister() {
    this.formRegister = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required])],
        description: [''],
        isOption: [false],
        priceCards: [[]],
        isHosting: [false],
        addressId: ['']
      }
    );
  }
}
