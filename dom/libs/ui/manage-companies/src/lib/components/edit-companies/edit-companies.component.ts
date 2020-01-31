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

  formRegister: FormGroup;

  private readonly editCompany$ = this.store.pipe(select(Store.getEditCompany)).pipe(
    tap(item => {
      if (!!item) {
        const clone = {...item};
        delete clone.uid; // never remove from original object reference
        this.formRegister.setValue(clone);
      }
    })
  );

  private vmBehavior = new BehaviorSubject<any>({});
  readonly vm$: Observable<any> = this.vmBehavior.asObservable();

  constructor(
    private readonly fb: FormBuilder,
    @Optional() public dialogRef: MatDialogRef<EditCompaniesComponent>,
    private readonly notificationService: NotificationService,
    private readonly store: NgRxStore<Store.CompaniesAllFeaturesState>,
    private readonly entityServices: AppEntityServices
  ) {
    this.buildFormRegister();
    combineLatest([this.editCompany$, this.formRegister.valueChanges])
      .pipe(
        map(([company, changes]) => ({ company, changes }))
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

  async onSave(initialCompany: Models.Company){
    const company = {...this.formRegister.value as Models.Company, uid: initialCompany?.uid};
    await this.entityServices.companiesCollectionService.upsert(company).pipe(
      tap(p =>{
        this.store.dispatch(Store.setEditCompany({ companyId: p?.uid }));
        this.notificationService.error('Enregistré.');
      })
    ).toPromise();
  }

  private buildFormRegister() {
    this.formRegister = this.fb.group(
      {
        name: ['', Validators.compose([Validators.required])],
        siren: ['', Validators.compose([Validators.required])],
        prefectoralId: ['', Validators.compose([Validators.required])],
        isHosting: ['', Validators.compose([Validators.required])],
      }
    );
  }
}
