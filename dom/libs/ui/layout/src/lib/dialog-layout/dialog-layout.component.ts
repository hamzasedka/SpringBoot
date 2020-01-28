import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss']
})
export class DialogLayoutComponent {
  @Input() canClose: boolean;
  @Input() title: string;

  @Output() closeClick = new EventEmitter();

  onCloseClick() {
    this.closeClick.emit();
  }
}
