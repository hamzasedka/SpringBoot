import { Component, OnInit, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validator, ControlValueAccessor, Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import * as Models from '@dom/common/dto';

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
export class EditPriceCardsComponent implements OnInit, ControlValueAccessor, Validator {

  formValue: FormGroup;
  readonly priceCardsArrayName = 'priceCards';

  readonly displayedColumns: (keyof Models.PriceCard)[] = [
    'priceExcludeTaxe',
    'priceIncludeTaxe',
    'strikethroughPrice',
    'canApplyPromotion',
    'contractCommitment',
    'contractCommitmentUnit'
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

  trackByPriceCard(_: number, element: Models.PriceCard): string {
    return element.uid;
  }

  getCurrency(): string {
    return 'EURO'
  }

  private createFormGroupFromPriceCard(priceCard: Models.PriceCard): FormGroup {
    return this.formBuilder.group({
      priceExcludeTaxe: [{ value: priceCard.priceExcludeTaxe ?? null, disabled: false },  [Validators.required, Validators.min(0)]],
      priceIncludeTaxe: [{ value: priceCard.priceIncludeTaxe ?? null, disabled: false },  [Validators.required, Validators.min(0)]],
      strikethroughPrice: [{ value: priceCard.strikethroughPrice ?? null, disabled: false },  [Validators.min(0)]],
      canApplyPromotion: [{ value: priceCard.strikethroughPrice ?? null, disabled: false }],
      contractCommitment: [{ value: priceCard.contractCommitment ?? null, disabled: false },  [Validators.required, Validators.min(0)]],
      contractCommitmentUnit: [{ value: priceCard.contractCommitmentUnit ?? null, disabled: false },  [Validators.required, Validators.min(0)]]
    });
  }

  // implements Validator
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
  // end implements Validator

  // implements ControlValueAccessor
  writeValue(priceCards: Models.PriceCard[]): void {
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
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
  // End implements ControlValueAccessor
}
