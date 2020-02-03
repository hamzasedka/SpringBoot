import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';
import { LoginGuard } from './components';
import { NavService } from '@dom/ui/layout';

const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: Components.PublicLayoutComponent,
    children: [
      {
        path: '',
        component: Components.HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: Components.ContactComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: Components.LoginComponent,
        pathMatch: 'full',
        canActivate: [ LoginGuard]
      },
      {
        path: '',
        loadChildren: async () => import('@dom/ui/subscribe').then(m => m.UiSubscribeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})
export class UiPublicRoutingModule {
  constructor(private readonly navService: NavService){
    this.navService.registerMenuLinks([
      {
        id: 'adminMenu',
        displayName :  'Mon espace client',
        expanded: false,
        iconName: 'settings',
        order : 99,
        route: '/admin'
      },
      {
        id: 'subscribenMenu',
        displayName :  `S'abonner`,
        expanded: false,
        iconName: 'add_shopping_cart',
        order : 1,
        route: '/subscribe'
      }
    ]);
  }
}
