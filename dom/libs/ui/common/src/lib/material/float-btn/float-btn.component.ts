import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.scss']
})
export class FloatBtnComponent {
  @Output() add = new EventEmitter();
  onClick(event: MouseEvent) {
    this.add.emit(event);
  }
}
