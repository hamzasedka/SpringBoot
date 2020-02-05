import { Component, ChangeDetectionStrategy } from '@angular/core';

import * as Models from '@dom/common/dto';
import { Observable } from 'rxjs';
import { AppEntityServices } from '@dom/data/ngrx-data';
import { EditAddresssesService } from '../../services/edit-addresses.service';

@Component({
  selector: 'dom-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesComponent {
  items$: Observable<Models.Company[]>;
  constructor(
    private readonly entityServices: AppEntityServices,
    private readonly editAddresssesService: EditAddresssesService
  ) {
    this.items$ = this.entityServices.companiesCollectionService.filteredEntities$;
  }

  async onRowClicked(event: MouseEvent) {
    event.preventDefault();
    await this.editAddresssesService.editAddress().toPromise();
  }
}
