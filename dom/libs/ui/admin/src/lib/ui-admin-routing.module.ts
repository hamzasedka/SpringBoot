import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';

const USER_SPACE_ROUTES: Routes = [
  {
    path: 'admin',
    component: Components.AdminLayoutComponent,
    children: [
      {
        path: '',
        component: Components.HomeComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(USER_SPACE_ROUTES)],
  exports: [RouterModule]
})
export class UiPublicRoutingModule {}
