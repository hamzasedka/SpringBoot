import { Component, OnInit, Optional, OnDestroy } from '@angular/core';
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
  selector: 'dom-edit-companies',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.scss']
})
export class EditCompaniesComponent implements OnInit, OnDestroy {

  companyForm: FormGroup;

  private readonly editCompany$ = this.store.pipe(select(Store.getEditCompany)).pipe(
    tap(item => {
      if (!!item) {
        const clone = { ...item };
        delete clone.uid; // never remove from original object reference
        delete clone.deleted;
        this.companyForm.setValue(clone);
      }
    })
  );

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  public get formKeys(): string[] {
    return Object.keys(this.companyForm.controls);
  }

  constructor(
    private readonly fb: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<EditCompaniesComponent>,
    private readonly notificationService: NotificationService,
    private readonly store: NgRxStore<Store.CompaniesAllFeaturesState>,
    private readonly entityServices: AppEntityServices
  ) {}

  ngOnInit() {
    this.buildFormRegister();
    this.setCondionnelValidators();
    combineLatest([this.editCompany$, this.companyForm.valueChanges])
      .pipe(
        map(([company, changes]) => ({ company, changes }))
      ).pipe(takeUntilDestroyed(this)).subscribe(r => {
        this.vmBehavior.next(r);
      });
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed
  }


  onCloseClick(): void {
    this.dialogRef?.close();
  }

  async onSave(initialCompany: Models.Company, event: MouseEvent) {
    event.preventDefault();
    const company = { ...this.companyForm.value as Models.Company, uid: initialCompany?.uid };
    await this.entityServices.companiesCollectionService.upsert(company).pipe(
      tap(p => {
        this.store.dispatch(Store.setEditCompany({ companyId: p?.uid }));
        this.notificationService.error('Enregistré.');
        this.dialogRef?.close();
      })
    ).toPromise();
  }

  private buildFormRegister() {
    this.companyForm = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required])],
        creationInProgress: [false],
        siren: [''],
        isHosting: [false],
        prefectoralId: [''],
        companyDocIds: [[]],
      }
    );
  }

  private setCondionnelValidators() {
    const creationInProgressControl = this.companyForm.get('creationInProgress');
    const sirenControl = this.companyForm.get('siren');
    const isHostingControl = this.companyForm.get('isHosting');
    const prefectoralIdControl = this.companyForm.get('prefectoralId');

    creationInProgressControl.valueChanges.pipe(takeUntilDestroyed(this)).subscribe(
      creationInProgress => {
        if (creationInProgress === false) {
          sirenControl.setValidators([Validators.required]);
        } else {
          sirenControl.setValidators(null);
        }
        sirenControl.updateValueAndValidity();
      }
    );

    isHostingControl.valueChanges.pipe(takeUntilDestroyed(this)).subscribe(
      isHosting => {
        if (isHosting === true) {
          prefectoralIdControl.setValidators([Validators.required]);
        } else {
          prefectoralIdControl.setValidators(null);
        }
        prefectoralIdControl.updateValueAndValidity();
      }
    );
  }
}
