import { Component } from '@angular/core';
import { Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';

import {
  MatDialog, MatDialogRef, MatDialogState
} from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user';
import * as Models from '@dom/common/dto';
import { Observable } from 'rxjs';
import { AppEntityServices } from '@dom/data/ngrx-data';

@Component({
  selector: 'dom-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$: Observable<Models.UserAccount[]>;
  private dialogRef: MatDialogRef<EditUserComponent, never>;
  constructor(public dialog: MatDialog,
              private readonly store: NgRxStore<Store.UsersAllFeaturesState>,
              private readonly entityServices: AppEntityServices
              ) {
    this.users$ = this.entityServices.userAccountCollectionService.filteredEntities$;
  }

  onRowClicked(userAccount?: Models.UserAccount) {
    this.store.dispatch(Store.setEditUserAccount({ user: userAccount }));
    if (!this.dialogRef || this.dialogRef.getState() !== MatDialogState.OPEN) {
      this.dialogRef = this.dialog.open(EditUserComponent, {
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
}
