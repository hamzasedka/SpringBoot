import { Component } from '@angular/core';
import { Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';

import {
  MatDialog, MatDialogRef, MatDialogState
} from '@angular/material/dialog';
import * as Models from '@dom/common/dto';
import { Observable } from 'rxjs';
import { AppEntityServices } from '@dom/data/ngrx-data';
import { EditAddressesComponent } from '../edit-addresses';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dom-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent {
  items$: Observable<Models.Company[]>;
  private dialogRef: MatDialogRef<EditAddressesComponent, never>;
  constructor(public dialog: MatDialog,
              private readonly store: NgRxStore<Store.AddressesAllFeaturesState>,
              private readonly entityServices: AppEntityServices
              ) {
    this.items$ = this.entityServices.companiesCollectionService.filteredEntities$.pipe(tap(console.log));
  }

  onRowClicked(address?: Models.Address) {
    this.store.dispatch(Store.setEditAddress({ addressId: address?.uid }));
    if (!this.dialogRef || this.dialogRef.getState() !== MatDialogState.OPEN) {
      this.dialogRef = this.dialog.open(EditAddressesComponent, {
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
