import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

import { matchPassword, passwordValidator, isPhoneNumber } from '@dom/common/core';
import { UserAccount } from '@dom/common/dto';

export class BaseRegisterComponent {
  formRegister: FormGroup;
  lastnameRegex = '[0-9a-zA-Z._]{3,20}';
  status = false;
  hide = true;
  constructor(private fb: FormBuilder) { }

  get email(): AbstractControl {
    return this.formRegister.get('email');
  }
  get lastname(): AbstractControl {
    return this.formRegister.get('lastname');
  }
  get firstname(): AbstractControl {
    return this.formRegister.get('firstname');
  }
  get confirmPassword(): AbstractControl {
    return this.formRegister.get('confirmPassword');
  }
  get password(): AbstractControl {
    return this.formRegister.get('password');
  }
  get phoneNumber(): AbstractControl {
    return this.formRegister.get('phoneNumber');
  }

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'Vous devez saisir une valeur'
      : this.email.hasError('email')
        ? 'Pas un e-mail valide'
        : this.email.hasError('takenemail')
          ? 'email Non disponible'
          : 'email Non disponible';
  }

  getErrorMessageLastname() {
    return this.lastname.hasError('required')
      ? 'Vous devez saisir une valeur'
      : this.lastname.hasError('pattern')
        ? `nom d'utilisateur non valide `
        : this.lastname.hasError('takenlastname')
          ? `Nom d'utilisateur indisponible`
          : `Nom d'utilisateur indisponible`;
  }

  getErrorMessageFirstUsername() {
    return this.firstname.hasError('required')
      ? 'Vous devez saisir une valeur'
      : this.firstname.hasError('pattern')
        ? `nom d'utilisateur non valide `
        : this.firstname.hasError('takenlastname')
          ? `Nom d'utilisateur indisponible`
          : `Nom d'utilisateur indisponible`;
  }

  getErrorMessagePassword() {
    return this.confirmPassword.hasError('required')
      ? 'Vous devez saisir un mot de passe'
      : this.formRegister.hasError('notSame')
        ? 'Les mots de passe ne correspondent pas'
        : this.formRegister.hasError('lengthRequired')
          ? 'Les mots de passe doit dépasser 6 charactères'
          : '';
  }

  getErrorMessageFirstname() {
    return this.firstname.hasError('required')
      ? 'Vous devez saisir une valeur'
      : null;
  }

  getErrorPhoneNumber() {
    return this.phoneNumber.hasError('forbiddenNumber')
      ? 'La chaîne du numéro de téléphone doit être non vide et commence par un signe plus et'
        + ' la chaîne doit contenir au moins un caractère alphanumérique'
      : '';
  }

  buildFormRegister(user?: UserAccount, passwordRequired = false) {
    this.formRegister = this.fb.group(
      {
        email: [
          user ? user.email : '',
          Validators.compose([Validators.required, Validators.email])
        ],
        lastname: [
          user ? user.lastname : '',
          Validators.compose([Validators.required, Validators.minLength(3)])
        ],
        firstname: [
          user ? user.firstname : '',
          Validators.compose([Validators.required, Validators.minLength(3)])
        ],
        password: [
          '',
          Validators.compose([passwordValidator(passwordRequired)])
        ],
        confirmPassword: ['']
        ,
        phoneNumber: [
          user ? user.phoneNumber : '',
          Validators.compose([ isPhoneNumber() , Validators.minLength(6)])
        ]
      },
      { validators: matchPassword }
    );
  }
}
