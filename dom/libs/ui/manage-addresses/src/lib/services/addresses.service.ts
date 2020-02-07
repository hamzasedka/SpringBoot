import { Injectable } from '@angular/core';
import { MatDialog, MatDialogState } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { AddressesComponent } from '../components/addresses';
import { Address } from '@dom/common/dto';

@Injectable()
export class AddresssesService {
  private  addressesDialogRef;

  constructor(private readonly dialog: MatDialog) { }

  selectAddress(): Observable<Address> {
    if (!this.addressesDialogRef || this.addressesDialogRef.getState() !== MatDialogState.OPEN) {
      this.addressesDialogRef = this.dialog.open<AddressesComponent, any, Address>(AddressesComponent, {
        minWidth: '100%',
        minHeight: '70vh',
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
