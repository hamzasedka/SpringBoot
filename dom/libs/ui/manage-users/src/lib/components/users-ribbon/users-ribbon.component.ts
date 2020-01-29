import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-users-ribbon',
  templateUrl: './users-ribbon.component.html',
  styleUrls: ['./users-ribbon.component.scss']
})
export class UsersRibbonComponent implements OnInit {
  @Output() addUserCmd = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  addUserClick() {
    this.addUserCmd.emit();
  }
}
