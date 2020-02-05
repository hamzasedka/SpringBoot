import { Injectable } from '@angular/core';
import * as Models from '@dom/common/dto';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { Store as NgRxStore } from '@ngrx/store';
import * as Store from '../store';
import { Observable, of } from 'rxjs';
import { EditAddressesComponent } from '../components/edit-addresses';

@Injectable()
export class EditAddresssesService {
  private editAddressesDialogRef: MatDialogRef<EditAddressesComponent, never>;

  constructor(public dialog: MatDialog,
    private readonly store: NgRxStore<Store.AddressesAllFeaturesState>,
  ) { }

  editAddress(address?: Models.Address): Observable<never> {
    this.store.dispatch(Store.setEditAddress({ addressId: address?.uid }));
    if (!this.editAddressesDialogRef || this.editAddressesDialogRef.getState() !== MatDialogState.OPEN) {
      this.editAddressesDialogRef = this.dialog.open(EditAddressesComponent, {
        minWidth: '100%',
        minHeight: '50%',
        maxHeight: '70vh',
        position: { bottom: '0px', left: '0px' },
        data: {},
        autoFocus: true,
        closeOnNavigation: true,
        restoreFocus: true
      });
      return this.editAddressesDialogRef.afterClosed();
    }
    return of();
  }
}
