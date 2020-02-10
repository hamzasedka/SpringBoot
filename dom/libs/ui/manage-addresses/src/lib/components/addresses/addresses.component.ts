import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Optional } from '@angular/core';

import * as Models from '@dom/common/dto';
import { Observable } from 'rxjs';
import { AppEntityServices } from '@dom/data/ngrx-data';
import { EditAddresssesService } from '../../services/edit-addresses.service';
import { AddressesResolver } from '../../resolvers';
import { takeUntilDestroyed } from '@dom/common/core';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dom-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesComponent implements OnInit, OnDestroy {
  items$: Observable<Models.Company[]>;
  constructor(
    private readonly entityServices: AppEntityServices,
    private readonly editAddresssesService: EditAddresssesService,
    private readonly addressesResolver: AddressesResolver,
    @Optional() public dialogRef: MatDialogRef<AddressesComponent>
  ) {
    this.items$ = this.entityServices.addressCollectionService.filteredEntities$.pipe(tap(console.log));
  }

  ngOnDestroy(): void {
  }

  async onRowClicked(address: Models.Address) {
    await this.editAddresssesService.editAddress(address).toPromise();
  }

  async onAdd() {
    const address: Models.Address = {
      addressLine1: '',
      addressLine2: '',
      postalCode: '',
      locality: '',
      country: 'France'
    };
    await this.editAddresssesService.editAddress(address).toPromise();
  }

  async onDeleteClick(address: Models.Address) {
    await this.entityServices.addressCollectionService.delete(address?.uid).toPromise();
  }

  ngOnInit(): void {
    this.addressesResolver.resolve().pipe(takeUntilDestroyed(this)).subscribe();
  }



  onSelectClicked(address: Models.Address) {
    if (!!this.dialogRef) {
      this.dialogRef.close(address);
    }
  }
}
