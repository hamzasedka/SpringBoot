import { Component, EventEmitter, Output, Input } from '@angular/core';
import * as Models from '@dom/common/dto';

@Component({
  selector: 'dom-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  readonly columns: (keyof Models.Product)[] = ['name', 'description', 'priceExcludeTaxe', 'isOption', 'reccurence'];

  @Output() rowClick = new EventEmitter<Models.Product>();

  @Input() products: Models.Product[];

  onRowClicked(product: Models.Product) {
    this.rowClick.emit(product);
  }
}
