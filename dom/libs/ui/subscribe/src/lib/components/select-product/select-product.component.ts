import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Models from '@dom/common/dto';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@dom/common/core';

@Component({
  selector: 'dom-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() products: Models.Product[];

  selectedProductId: string;

  selectProductForm: FormGroup;

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  constructor(private readonly fb: FormBuilder) {
    combineLatest([this.selectProductForm.valueChanges])
      .pipe(
        map(([changes]) =>
          ({
            changes,
            addressIdError: ''
          }))
      ).pipe(takeUntilDestroyed(this)).subscribe(r => {
        this.vmBehavior.next(r);
      })
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  private buildFormRegister() {
    this.selectProductForm = this.fb.group(
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
