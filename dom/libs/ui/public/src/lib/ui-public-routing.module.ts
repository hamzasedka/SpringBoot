import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';

const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: Components.HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})
export class UiPublicRoutingModule {}
