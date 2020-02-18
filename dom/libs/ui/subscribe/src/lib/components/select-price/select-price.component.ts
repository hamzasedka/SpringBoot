import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Models from '@dom/common/dto';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@dom/common/core';

@Component({
  selector: 'dom-select-price',
  templateUrl: './select-price.component.html',
  styleUrls: ['./select-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectPriceComponent),
      multi: true
    }
  ]
})
export class SelectPriceComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() priceCards: Models.PriceCard[];

  selectPriceCardForm: FormGroup;

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  get priceCardForm(){
    return this.selectPriceCardForm.get('priceCard');
  }

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
    combineLatest([this.selectPriceCardForm.valueChanges])
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

  writeValue(priceCard: Models.PriceCard): void {
    this.priceCardForm.setValue(priceCard);
  }

  registerOnChange(fn: any): void {
    this.priceCardForm.valueChanges.pipe(takeUntilDestroyed(this)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled){
      this.selectPriceCardForm.disable();
    } else{
      this.selectPriceCardForm.enable();
    }
  }

  private buildForm() {
    this.selectPriceCardForm = this.fb.group(
      {
        priceCard: [{}, Validators.compose([Validators.required])],
      }
    );
  }
}
