import { Component, OnInit, Optional, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
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
  selector: 'dom-edit-addresses',
  templateUrl: './edit-addresses.component.html',
  styleUrls: ['./edit-addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAddressesComponent implements OnInit, OnDestroy {

  editAddresssform: FormGroup;

  private readonly editIem$ = this.store.pipe(select(Store.getEditAddress)).pipe(
    tap(item => {
      if (!!item) {
        const clone = {...item};
        delete clone.uid; // never remove from original object reference
        delete clone.deleted;
        this.editAddresssform.setValue(clone);
      }
    })
  );

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  constructor(
    private readonly fb: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<EditAddressesComponent>,
    private readonly notificationService: NotificationService,
    private readonly store: NgRxStore<Store.AddressesAllFeaturesState>,
    private readonly entityServices: AppEntityServices
  ) {
    this.buildFormRegister();
    combineLatest([this.editIem$, this.editAddresssform.valueChanges])
      .pipe(
        map(([address, changes]) => ({ address, changes }))
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

  async onSave(initialAddress: Models.Address){
    const address = {...this.editAddresssform.value as Models.Address, uid: initialAddress?.uid};
    await this.entityServices.addressCollectionService.upsert(address).pipe(
      tap(p =>{
        this.store.dispatch(Store.setEditAddress({ addressId: p?.uid }));
        this.notificationService.error('Enregistré.');
      })
    ).toPromise();
  }

  private buildFormRegister() {
    this.editAddresssform = this.fb.group(
      {
        addressLine1: ['', Validators.compose([Validators.required])],
        addressLine2: [''],
        postalCode: ['', Validators.compose([Validators.required])],
        locality: ['', Validators.compose([Validators.required])],
        country: ['', Validators.compose([Validators.required])]
      }
    );
  }
}

