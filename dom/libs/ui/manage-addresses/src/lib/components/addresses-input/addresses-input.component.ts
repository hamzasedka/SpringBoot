import { Component, OnInit, Optional, OnDestroy, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@dom/common/core';
import { AppEntityServices } from '@dom/data/ngrx-data';
import { AddresssesService } from '../../services';
import { Address } from '@dom/common/dto';

@Component({
  selector: 'dom-addresses-input',
  templateUrl: './addresses-input.component.html',
  styleUrls: ['./addresses-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressesInputComponent),
      multi: true
    }
  ]
})
export class AddressesInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  addresssform: FormGroup;
  disabled: boolean;

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  private propagateChange = (_: any) => { };

  constructor(
    private readonly fb: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<AddressesInputComponent>,
    private readonly appEntityServices: AppEntityServices,
    private readonly addresssesService: AddresssesService) {
    this.buildFormRegister();
    combineLatest([this.addresssform.valueChanges])
      .pipe(
        map(([changes]) => ({ changes, addressError: '' }))
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

  async onSearchAddress(event: MouseEvent) {
    event.preventDefault();
    const selectedAddress: Address = await this.addresssesService.selectAddress().toPromise();
    if(selectedAddress){
      if (this.propagateChange) {
        this.propagateChange(selectedAddress?.uid);
      }
      this.addresssform.setValue(
        {
          address: this.addressToString(selectedAddress)
        }
      );
    }
  }

  async onDeleteAddress(event: MouseEvent) {
    event.preventDefault();
    this.propagateChange('');
    this.addresssform.setValue(
      {
        address: ''
      }
    );
  }

  private buildFormRegister() {
    this.addresssform = this.fb.group(
      {
        address: { value: '', disabled: true } //disabled
      }
    );
  }

  // implements ControlValueAccessor
  writeValue(addressId: string): void {
    if (!!addressId) {
      this.appEntityServices.addressCollectionService
        .getByKey(addressId).pipe(takeUntilDestroyed(this)).subscribe(
          address => {
            this.addresssform.setValue(
              {
                address: this.addressToString(address)
              }
            );
          }
        );
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // end of ControlValueAccessor implementations

  private addressToString(address: Address): string {
    if(!address){
      return '';
    }
    return `${address?.addressLine1} ${address?.addressLine2} ${address?.postalCode} ${address?.locality}`;
  }
}
