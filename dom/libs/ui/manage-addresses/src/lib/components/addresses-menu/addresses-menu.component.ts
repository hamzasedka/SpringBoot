import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-addresses-menu',
  templateUrl: './addresses-menu.component.html',
  styleUrls: ['./addresses-menu.component.scss']
})
export class AddressesMenuComponent {

  @Output() addProduct = new EventEmitter();
  onAddClick() {
    this.addProduct.emit();
  }
}
