import { Component, EventEmitter, Output, Input } from '@angular/core';
import * as Models from '@dom/common/dto';

@Component({
  selector: 'dom-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss']
})
export class AddressesListComponent {

  readonly columns: (keyof Models.Address)[] = ['addressLine1', 'addressLine2', 'postalCode', 'locality', 'country'];

  @Output() rowClick = new EventEmitter<Models.Address>();

  @Input() items: Models.Address[];

  onRowClicked(item: Models.Address) {
    this.rowClick.emit(item);
  }
}

