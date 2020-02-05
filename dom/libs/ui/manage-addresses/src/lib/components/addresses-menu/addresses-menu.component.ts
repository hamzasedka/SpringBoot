import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dom-addresses-menu',
  templateUrl: './addresses-menu.component.html',
  styleUrls: ['./addresses-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesMenuComponent {

  @Output() addProduct = new EventEmitter();
  onAddClick(event: MouseEvent) {
    this.addProduct.emit(event);
  }
}
