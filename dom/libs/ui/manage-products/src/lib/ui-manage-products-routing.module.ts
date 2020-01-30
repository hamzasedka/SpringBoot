import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';
import * as Resolvers from './resolvers';
import { UserRoles } from '@dom/common/dto';
const USER_ROUTES: Routes = [
  {
    path: 'products',
    component: Components.ProductsComponent,
    pathMatch: 'full',
    data: {
      displayName: 'Gérer les produits',
      iconName: 'home'
    },
    resolve: { _: Resolvers.ProductsResolver}
  },
  {
    path: 'products/:productId',
    component: Components.EditProductsComponent,
    pathMatch: 'full',
    data: {
      displayName: `Editer un produit`,
      iconName: 'supervisor_account',
      permissions: [UserRoles.Users_Read]
    },
    resolve: { _: Resolvers.ProductResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule]
})
export class UiManageProductsModule {}
