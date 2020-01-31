import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-companies-menu',
  templateUrl: './companies-menu.component.html',
  styleUrls: ['./companies-menu.component.scss']
})
export class CompaniesMenuComponent  {

  @Output() addProduct = new EventEmitter();
  onAddClick() {
    this.addProduct.emit();
  }
}
