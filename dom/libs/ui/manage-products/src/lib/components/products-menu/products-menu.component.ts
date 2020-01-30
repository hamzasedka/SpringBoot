import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.scss']
})
export class ProductsMenuComponent {
  @Output() addProduct = new EventEmitter();
  onAddClick() {
    this.addProduct.emit();
  }
}
