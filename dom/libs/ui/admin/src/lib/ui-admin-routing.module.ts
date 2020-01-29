import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';
import { AuthGuard } from '@dom/infra/auth';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(USER_SPACE_ROUTES)],
  exports: [RouterModule]
})
export class UiPublicRoutingModule {}
