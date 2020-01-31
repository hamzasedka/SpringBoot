import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAddressesComponent } from './components/edit-addresses/edit-addresses.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddressesListComponent } from './components/addresses-list/addresses-list.component';
import { AddressesMenuComponent } from './components/addresses-menu/addresses-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EditAddressesComponent, AddressesComponent, AddressesListComponent, AddressesMenuComponent]
})
export class UiManageAddressesModule {}
