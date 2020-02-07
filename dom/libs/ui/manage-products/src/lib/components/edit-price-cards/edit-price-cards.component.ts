import { Component, OnInit, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  FormGroup, FormBuilder, FormArray, Validator, ControlValueAccessor, Validators, NG_VALUE_ACCESSOR,
  NG_VALIDATORS, AbstractControl, ValidationErrors
} from '@angular/forms';
import * as Models from '@dom/common/dto';
import { takeUntilDestroyed } from '@dom/common/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dom-edit-price-cards',
  templateUrl: './edit-price-cards.component.html',
  styleUrls: ['./edit-price-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => EditPriceCardsComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EditPriceCardsComponent), multi: true }
  ]
})
export class EditPriceCardsComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {

  formValue: FormGroup;
  readonly priceCardsArrayName = 'priceCards';

  readonly displayedColumns: string[] = [
    'priceExcludeTaxe',
    'priceIncludeTaxe',
    'strikethroughPrice',
    'canApplyPromotion',
    'contractCommitment',
    'contractCommitmentUnit',
    'delete'
  ];

  constructor(private readonly formBuilder: FormBuilder, private readonly changeDetector: ChangeDetectorRef) { }

  get formArray(): FormArray {
    return this.formValue.controls[this.priceCardsArrayName] as FormArray;
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      [this.priceCardsArrayName]: this.formBuilder.array([])
    });
  }

  ngOnDestroy(): void {
  }

  trackByPriceCard(_: number, element: Models.PriceCard): string {
    return element.uid;
  }

  getCurrency(): string {
    return 'EURO'
  }

  private createFormGroupFromPriceCard(priceCard: Models.PriceCard): FormGroup {
    return this.formBuilder.group({
      priceExcludeTaxe: [{ value: priceCard.priceExcludeTaxe ?? null, disabled: false }, [Validators.required, Validators.min(0)]],
      priceIncludeTaxe: [{ value: priceCard.priceIncludeTaxe ?? null, disabled: false }, [Validators.required, Validators.min(0)]],
      strikethroughPrice: [{ value: priceCard.strikethroughPrice ?? null, disabled: false }, [Validators.min(0)]],
      canApplyPromotion: [{ value: priceCard.strikethroughPrice ?? null, disabled: false }],
      contractCommitment: [{ value: priceCard.contractCommitment ?? null, disabled: false }, [Validators.required, Validators.min(0)]],
      contractCommitmentUnit: [{ value: priceCard.contractCommitmentUnit ?? null, disabled: false }, [Validators.required, Validators.min(0)]]
    });
  }

  // implements Validator
  validate(control: AbstractControl): ValidationErrors {
    let validationErrors: ValidationErrors = {};
    for (let index = 0; index < this.formArray.length; index += 1) {
      const group = this.formArray.at(index) as FormGroup;
      for (const controlKey in group.controls) {
        if (!!group.controls[controlKey]) {
          const errors = group.controls[controlKey].errors;
          if (!!errors) {
            validationErrors = {
              ...validationErrors,
              [`Index[${index}]-${controlKey}`]: errors
            };
          }
        }
      }
    }
    return Object.keys(validationErrors).length === 0 ? undefined : validationErrors;
  }

  registerOnValidatorChange?(fn: () => void): void {
  }
  // end implements Validator

  // implements ControlValueAccessor
  writeValue(priceCards: Models.PriceCard[]): void {
    if (!priceCards) {
      this.formArray.setValue([]);
    }
    let priceCardIndex = 0;
    while (priceCardIndex < this.formArray.length) {
      if (!priceCards.find(priceCard => {
        const priceCardValue: Models.PriceCard = this.formArray.at(priceCardIndex).value;
        return priceCardValue.uid === priceCard.uid;
      })) {
        this.formArray.removeAt(priceCardIndex);
      } else {
        priceCardIndex += 1;
      }
    }
    priceCardIndex = 0;
    for (const priceCard of priceCards) {
      const newValue = this.createFormGroupFromPriceCard(priceCard);
      if (priceCardIndex >= this.formArray.length || this.formArray.at(priceCardIndex).value.uid !== priceCard.uid) {
        this.formArray.insert(priceCardIndex, newValue);
      } else {
        this.formArray.at(priceCardIndex).setValue(newValue.value, { emitEvent: false });
      }
      priceCardIndex += 1;
    }
    this.changeDetector.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.formArray.valueChanges.pipe(takeUntilDestroyed(this), tap(console.log)).subscribe(fn);
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  // End implements ControlValueAccessor

  onDelete(index: number, event: MouseEvent) {
    event.preventDefault();
    console.log(index);
    const values = this.formArray.value as Models.PriceCard[];
    values.splice(index, 1);
    this.writeValue(values);
  }
}
