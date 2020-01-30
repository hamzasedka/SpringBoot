import { Component, OnInit, Optional, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@dom/ui/common';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';
import { combineLatest, Observable, of, BehaviorSubject } from 'rxjs';
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
      if (!!product) {
        this.formRegister.setValue(product);
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
        map(([product]) => ({ product }))
      ).pipe(takeUntilDestroyed(this)).subscribe(r => {
        this.vmBehavior.next(r);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed
  }

  async onSave(){
    const product = this.formRegister.value as Models.Product;
    await this.entityServices.productsCollectionService.upsert(product).toPromise();
  }

  private buildFormRegister() {
    this.formRegister = this.fb.group(
      {
        uid: [''],
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
