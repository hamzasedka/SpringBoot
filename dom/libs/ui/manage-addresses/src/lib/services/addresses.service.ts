import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { AddressesComponent } from '../components/addresses';

@Injectable()
export class AddresssesService {
  private addressesDialogRef: MatDialogRef<AddressesComponent, never>;

  constructor(public dialog: MatDialog) { }

  selectAddress(): Observable<never> {
    if (!this.addressesDialogRef || this.addressesDialogRef.getState() !== MatDialogState.OPEN) {
      this.addressesDialogRef = this.dialog.open(AddressesComponent, {
        minWidth: '100%',
        minHeight: '50%',
        maxHeight: '70vh',
        position: { bottom: '0px', left: '0px' },
        data: {},
        autoFocus: true,
        closeOnNavigation: true,
        restoreFocus: true
      });
      return this.addressesDialogRef.afterClosed();
    }
    return of();
  }
}
