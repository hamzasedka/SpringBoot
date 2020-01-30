import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { Component, OnInit, ElementRef, ViewChild, OnDestroy, Optional } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '@dom/infra/auth';
import { UserAccountCollectionService } from '@dom/data/ngrx-data';
import { select, Store as NgRxStore } from '@ngrx/store';

import { Router } from '@angular/router';
import { UserAccount, UserRoles } from '@dom/common/dto';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { combineLatest, Observable, from, of } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { EnumHelper, EnumItem, ObjectHelper } from '@dom/common/core';
import * as Store from '../../store';
import { MatDialogRef } from '@angular/material/dialog';
import { BaseRegisterComponent } from './base-register.component';
import { NotificationService } from '@dom/ui/common';

@Component({
  selector: 'dom-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent extends BaseRegisterComponent implements OnInit, OnDestroy {

  userRolesEnum = UserRoles;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  roleCtrl = new FormControl();
  filteredRoles$: Observable<EnumItem[]>;
  selectedRoles: EnumItem[] = [];
  allRoles: EnumItem[] = EnumHelper.EnumToList(this.userRolesEnum);

  @ViewChild('roleInput', { static: true }) roleInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: true }) matAutocomplete: MatAutocomplete;


  private readonly editUserAccount$ = this.store.pipe(select(Store.getEditUserAccount)).pipe(
    tap(user => {
      this.selectedRoles = user && user.roles ? this.allRoles.filter(r => user.roles.includes(r.id as UserRoles)) : [];
      this.buildFormRegister(user);
    })
  );
  readonly vm$ = combineLatest([this.editUserAccount$])
    .pipe(
      map(([user]) => ({ user }))
    );

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService,
    fb: FormBuilder,
    private readonly userAccountDataService: UserAccountCollectionService,
    private readonly store: NgRxStore<Store.UsersAllFeaturesState>,
    @Optional() public dialogRef: MatDialogRef<EditUserComponent>,
    private readonly notificationService: NotificationService
  ) {
    super(fb);
    this.filteredRoles$ = this.roleCtrl.valueChanges.pipe(
      map((role: string | null) => !!role ? this._filter(role) : this.allRoles.slice())
    );
  }

  ngOnInit() {
    this.editUserAccount$.subscribe(

    );
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed
  }

  onCloseClick(): void {
    this.dialogRef?.close();
  }

  remove(role: EnumItem): void {
    const index = this.selectedRoles.findIndex(x => x.id === role.id);
    if (index >= 0) {
      this.selectedRoles.splice(index, 1);
    }
    if (!this.allRoles.find(x => x.id === role.id)) {
      this.allRoles.push(role);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedRole = event.option.value as EnumItem;
    this.allRoles = this.allRoles.filter(r => r.id !== selectedRole.id);
    if (!this.selectedRoles.find(x => x.id === selectedRole.id)) {
      this.selectedRoles.push(selectedRole);
    }
    if (this.roleInput) {
      this.roleInput.nativeElement.value = '';
    }
    this.roleCtrl.setValue(null);
  }

  private _filter(value: any): EnumItem[] {
    let filterValue = '';
    if (typeof (value) === 'string') {
      filterValue = value.toLowerCase();
    } else {
      filterValue = (value as EnumItem).name;
    }
    return this.allRoles.filter(role => role.name.toLowerCase().indexOf(filterValue) === 0);
  }

  trackByRole(_: number, item: EnumItem): number {
    return 1;
  }

  async emailExist($event) {
    const userName = $event.target.value;
    await this.userAccountDataService
      .emailExist(userName)
      .pipe()
      .toPromise()
      .then(exist => {
        if (exist) {
          this.lastname.setErrors({
            takenusername: false
          });
        }
      });
  }

  async onRegister(initialUser: UserAccount) {
    if (this.formRegister) {
      const formValue = this.formRegister.value as UserAccount;
      const userForm = {
        ...initialUser,
        ...formValue,
        roles: this.selectedRoles.map(r => r.id as UserRoles),
        displayName: `${formValue.lastname} ${formValue.firstname}`,
        password: formValue.password === formValue.confirmPassword ? formValue.password : undefined,
        phoneNumber: !!formValue.phoneNumber ? formValue.phoneNumber : undefined,
        firstname: formValue.firstname,
        lastname: formValue.lastname
      };
      // add new
      if (userForm && ObjectHelper.isEmpty(initialUser)) {
        await
          from(this.auth.createAthUser(userForm))
            .pipe(
              switchMap(result => {
                const user: UserAccount = {
                  uid: result.uid,
                  roles: userForm.roles,
                  firstname: userForm.firstname,
                  lastname: userForm.lastname
                };
                return this.userAccountDataService.add(user).pipe(
                  tap(() => {
                    this.notificationService.error('Enregistré.');
                  })
                );
              }),
              catchError(error => {
                this.notificationService.error(error.message);
                return of(false);
              })
            ).toPromise();
      } else {
        await from(this.auth.updateAthUser(userForm))
          .pipe(
            switchMap(result => {
              const user: UserAccount = {
                uid: result.uid,
                roles: userForm.roles,
                firstname: userForm.firstname,
                lastname: userForm.lastname
              };
              return this.userAccountDataService.update(user).pipe(
                tap(() => {
                  this.notificationService.error('Enregistré.');
                })
              );
            }),
            catchError(error => {
              this.notificationService.error(error.message);
              return of(false);
            })
          ).toPromise();
      }
    }
  }
}
