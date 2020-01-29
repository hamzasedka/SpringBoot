import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';

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
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})
export class UiPublicRoutingModule {}
