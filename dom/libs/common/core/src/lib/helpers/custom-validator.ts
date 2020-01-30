import { FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';

export function isPhoneNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;
    if (!phoneNumber) {
      return null;
    }

    if (typeof phoneNumber !== 'string') {
      return { forbiddenNumber: { value: phoneNumber } };
    }
    // Phone number validation is very lax here. Backend will enforce E.164
    // spec compliance and will normalize accordingly.
    // The phone number string must be non-empty and starts with a plus sign.
    const re1 = /^\+/;
    // The phone number string must contain at least one alphanumeric character.
    const re2 = /[\da-zA-Z]+/;

    const result =  re1.test(phoneNumber) && re2.test(phoneNumber) ? null : { forbiddenNumber: { value: phoneNumber } };
    return result;
  };
}

export function passwordValidator(required: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const pass = control.value as string;
    if (!required) {
      return null;
    }
    if (!pass) {
      return { required: true };
    }
    if (!pass.length) {
      return { lengthRequired: true };
    }
    return null;
  };
}

export function matchPassword(required: boolean): ValidatorFn {
  return (control: FormGroup): ValidationErrors | null => {
    if (!required) {
      return null;
    }

    const password = control.get('password').value;
    const confirmPass = control.get('confirmPassword').value;
    const result = password === confirmPass ? null : { notSame: true };
    return result;
  };
}


export class CustomValidator {
  static transformIsoToAgeFormat(group: FormGroup) {
    const isoDate = group.controls.age.value;
    if (!isoDate) {
      return;
    }
    const parts = isoDate.split('T')[0].split('-');
    const response = {
      // tslint:disable-next-line: radix
      year: parseInt(parts[0]),
      // tslint:disable-next-line: radix
      month: parseInt(parts[1]),
      // tslint:disable-next-line: radix
      day: parseInt(parts[2])
    };
    return response;
  }
  static transformDatePicker(date) {
    if (typeof date !== 'string') {
      date.month -= 1;
    }
    return moment(date).format('YYYY-MM-DD');
  }
}
