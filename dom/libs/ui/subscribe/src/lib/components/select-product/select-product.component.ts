import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Models from '@dom/common/dto';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { takeUntilDestroyed } from '@dom/common/core';

@Component({
  selector: 'dom-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss']
})
export class SelectProductComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() products: Models.Product[];

  selectProductForm: FormGroup;

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  get productIdForm(){
    return this.selectProductForm.get('productId');
  }

  constructor(private readonly fb: FormBuilder) {
    this.buildFormRegister();
    combineLatest([this.selectProductForm.valueChanges])
      .pipe(
        map(([changes]) =>
          ({
            changes,
            productIddError: ''
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

  writeValue(productId: string): void {
    this.productIdForm.setValue(productId);
  }

  registerOnChange(fn: any): void {
    this.productIdForm.valueChanges.pipe(takeUntilDestroyed(this)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  private buildFormRegister() {
    this.selectProductForm = this.fb.group(
      {
        productId: ['', Validators.compose([Validators.required])],
      }
    );
  }
}
