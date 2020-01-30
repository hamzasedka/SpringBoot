import { Component, OnInit } from '@angular/core';
import { Store as NgRxStore } from '@ngrx/store';
import * as Store from '../../store';

import {
  MatDialog, MatDialogRef, MatDialogState
} from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user';
import { UserAccount } from '@dom/common/dto';
import { Observable } from 'rxjs';
import { UserAccountCollectionService } from '@dom/data/ngrx-data';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'dom-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<UserAccount[]>;

  private dialogRef: MatDialogRef<EditUserComponent, never>;
  constructor(public dialog: MatDialog,
              private readonly store: NgRxStore<Store.UsersAllFeaturesState>,
              private readonly userAccountService: UserAccountCollectionService,
              private firebaseAuth: AngularFireAuth // TO be removed
              ) {
    this.users$ = this.userAccountService.filteredEntities$;
  }

  ngOnInit() { }

  onRowClicked(userAccount?: UserAccount) {
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
      // dialogRef.afterClosed().subscribe(result => {});
    }
  }
}
