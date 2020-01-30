import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserAccount } from '@dom/common/dto';

@Component({
  selector: 'dom-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  readonly columns: (keyof UserAccount)[] = ['lastname', 'firstname', 'email', 'phoneNumber'];

  @Output() rowClick = new EventEmitter<UserAccount>();
  @Input() users: UserAccount[];

  onRowClicked(userAccount: UserAccount) {
    this.rowClick.emit(userAccount);
  }
}
