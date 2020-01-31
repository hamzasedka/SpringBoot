import { Component } from '@angular/core';
import { Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';

import {
  MatDialog, MatDialogRef, MatDialogState
} from '@angular/material/dialog';
import { EditProductsComponent } from '../edit-products';
import * as Models from '@dom/common/dto';
import { Observable } from 'rxjs';
import { AppEntityServices } from '@dom/data/ngrx-data';

@Component({
  selector: 'dom-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$: Observable<Models.Product[]>;
  private dialogRef: MatDialogRef<EditProductsComponent, never>;
  constructor(public dialog: MatDialog,
              private readonly store: NgRxStore<Store.ProductsAllFeaturesState>,
              private readonly entityServices: AppEntityServices
              ) {
    this.products$ = this.entityServices.productsCollectionService.filteredEntities$;
  }

  onRowClicked(product?: Models.Product) {
    console.log('onRowClicked', product);
    this.store.dispatch(Store.setEditProduct({ productId: product?.uid }));
    if (!this.dialogRef || this.dialogRef.getState() !== MatDialogState.OPEN) {
      this.dialogRef = this.dialog.open(EditProductsComponent, {
        minWidth: '100%',
        minHeight: '50%',
        maxHeight: '70vh',
        position: { bottom: '0px', left: '0px' },
        data: {},
        autoFocus: true,
        closeOnNavigation: true,
        restoreFocus: true
      });
    }
  }
}
