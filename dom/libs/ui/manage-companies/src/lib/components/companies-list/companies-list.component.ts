import { Component, EventEmitter, Output, Input } from '@angular/core';
import * as Models from '@dom/common/dto';

@Component({
  selector: 'dom-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent {

  readonly columns: (keyof Models.Company)[] = ['name', 'siren', 'prefectoralId', 'deleted'];

  @Output() rowClick = new EventEmitter<Models.Company>();
  @Output() deleteClick = new EventEmitter<Models.Company>();

  @Input() items: Models.Company[];

  onRowClicked(company: Models.Company) {
    this.rowClick.emit(company);
  }

  onDeleteClicked(company: Models.Company, event: MouseEvent) {
    event.preventDefault();
    this.deleteClick.emit(company);
  }
}
