import { Component } from '@angular/core';
import { Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';

import {
  MatDialog, MatDialogRef, MatDialogState
} from '@angular/material/dialog';
import * as Models from '@dom/common/dto';
import { Observable } from 'rxjs';
import { AppEntityServices } from '@dom/data/ngrx-data';
import { EditCompaniesComponent } from '../edit-companies';

@Component({
  selector: 'dom-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  items$: Observable<Models.Company[]>;
  private dialogRef: MatDialogRef<EditCompaniesComponent, never>;
  constructor(public dialog: MatDialog,
    private readonly store: NgRxStore<Store.CompaniesAllFeaturesState>,
    private readonly entityServices: AppEntityServices
  ) {
    this.items$ = this.entityServices.companiesCollectionService.filteredEntities$;
  }

  onRowClicked(company?: Models.Company) {
    this.store.dispatch(Store.setEditCompany({ companyId: company?.uid }));
    if (!this.dialogRef || this.dialogRef.getState() !== MatDialogState.OPEN) {
      this.dialogRef = this.dialog.open(EditCompaniesComponent, {
        minWidth: '100%',
        minHeight: '50%',
        maxHeight: '70vh',
        position: { bottom: '0px', left: '0px' },
        data: {},
        autoFocus: true,
        closeOnNavigation: true,
        restoreFocus: true
      });
    }
  }

  async onDelete(company?: Models.Company) {
    await this.entityServices.companiesCollectionService.update({uid: company.uid, deleted: true});
  }
}
