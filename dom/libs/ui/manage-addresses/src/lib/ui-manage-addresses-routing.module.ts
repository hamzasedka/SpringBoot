import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';
import * as Resolvers from './resolvers';

const ROUTES: Routes = [
  {
    path: 'addresses',
    component: Components.AddressesComponent,
    pathMatch: 'full',
    data: {
      displayName: 'Gérer les adresses',
      iconName: 'home'
    },
    resolve: { _: Resolvers.AddressesResolver}
  },
  {
    path: 'addresses/:addressId',
    component: Components.EditAddressesComponent,
    pathMatch: 'full',
    data: {
      displayName: `Editer une adresse`,
    },
    resolve: { _: Resolvers.AddressResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UiManageAddressesRoutingModule {}
