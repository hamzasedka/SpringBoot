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
        displayName :  'Manage',
        expanded: true,
        iconName: 'settings',
        order : 2,
        children:[
          {
            id: 'usersMenu',
            displayName :  'Users',
            expanded: false,
            iconName: 'supervised_user_circle',
            order : 1,
            route: '/admin/users'
          }
        ]
      }
    ]);
  }
}
