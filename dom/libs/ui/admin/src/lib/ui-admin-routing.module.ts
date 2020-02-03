import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';
import { AuthGuard } from '@dom/infra/auth';
import { NavService } from '@dom/ui/layout';

const USER_SPACE_ROUTES: Routes = [
  {
    path: 'admin',
    component: Components.AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: Components.HomeComponent,
        pathMatch: 'full',
        data: {
          displayName: 'Home',
          iconName: 'homr'
        }
      },
      {
        path: '',
        loadChildren: async () => import('@dom/ui/manage-users').then(m => m.UiManageUsersModule)
      },
      {
        path: '',
        loadChildren: async () => import('@dom/ui/manage-products').then(m => m.UiManageProductsModule)
      },
      {
        path: '',
        loadChildren: async () => import('@dom/ui/manage-companies').then(m => m.UiManageCompaniesModule)
      },
      {
        path: '',
        loadChildren: async () => import('@dom/ui/manage-addresses').then(m => m.UiManageAddressesModule)
      },
      {
        path: '',
        loadChildren: async () => import('@dom/ui/subscribe').then(m => m.UiSubscribeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(USER_SPACE_ROUTES)],
  exports: [RouterModule]
})
export class UiPublicRoutingModule {
  constructor(private readonly navService: NavService){
    this.navService.registerMenuLinks([
      {
        id: 'homeMenu',
        displayName :  'Acceuil public',
        expanded: false,
        iconName: 'home',
        order : 1,
        route: '/'
      },
      {
        id: 'adminMenu',
        displayName :  'Gérer',
        expanded: true,
        iconName: 'settings',
        order : 2,
        children:[
          {
            id: 'usersMenu',
            displayName :  'Utilisateurs',
            expanded: false,
            iconName: 'supervised_user_circle',
            order : 1,
            route: '/admin/users'
          },
          {
            id: 'productsMenu',
            displayName :  'Produits',
            expanded: false,
            iconName: 'account_balance_wallet',
            order : 1,
            route: '/admin/products'
          },
          {
            id: 'companiesMenu',
            displayName :  'Entreprises',
            expanded: false,
            iconName: 'business',
            order : 1,
            route: '/admin/companies'
          },
          {
            id: 'addressesMenu',
            displayName :  'Adresses',
            expanded: false,
            iconName: 'my_location',
            order : 1,
            route: '/admin/addresses'
          }
        ]
      },
      {
        id: 'subscribenMenu',
        displayName :  `S'abonner`,
        expanded: false,
        iconName: 'add_shopping_cart',
        order : 1,
        route: '/admin/subscribe'
      }
    ]);
  }
}
