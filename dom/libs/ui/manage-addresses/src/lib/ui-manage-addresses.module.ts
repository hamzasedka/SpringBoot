import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as  Components from './components';
import { AddressesStoreModule } from './store';
import { AppMaterialDesignModule, FloatBtnModule } from '@dom/ui/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AppLayoutModule } from '@dom/ui/layout';
import { UiManageAddressesRoutingModule } from './ui-manage-addresses-routing.module';
import { AddresssesService, EditAddresssesService } from './services';

@NgModule({
  imports: [
    CommonModule,
    UiManageAddressesRoutingModule,
    AddressesStoreModule,
    AppMaterialDesignModule,
    FloatBtnModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppLayoutModule
  ],
  declarations: [Components.EditAddressesComponent, Components.AddressesComponent, Components.AddressesMenuComponent, Components.AddressesListComponent],
  exports: [Components.AddressesComponent, Components.AddressesComponent],
  entryComponents: [Components.AddressesComponent, Components.EditAddressesComponent],
  providers: [AddresssesService , EditAddresssesService]
})
export class UiManageAddressesModule { }
