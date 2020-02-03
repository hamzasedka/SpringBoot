import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';

const ROUTES: Routes = [
  {
    path: 'subscribe',
    component: Components.SubscribeComponent,
    pathMatch: 'full',
    data: {
      displayName: `S'abonner`,
      iconName: 'home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UiSubscribeRoutingModule {}
