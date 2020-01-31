import { Component, EventEmitter, Output, Input } from '@angular/core';
import * as Models from '@dom/common/dto';

@Component({
  selector: 'dom-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent {

  readonly columns: (keyof Models.Company)[] = ['name', 'siren', 'prefectoralId'];

  @Output() rowClick = new EventEmitter<Models.Company>();

  @Input() items: Models.Company[];

  onRowClicked(product: Models.Company) {
    this.rowClick.emit(product);
  }
}
