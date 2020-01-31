import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';
import * as Resolvers from './resolvers';

const ROUTES: Routes = [
  {
    path: 'companies',
    component: Components.CompaniesComponent,
    pathMatch: 'full',
    data: {
      displayName: 'Gérer les entreprises',
      iconName: 'home'
    },
    resolve: { _: Resolvers.CompaniesResolver}
  },
  {
    path: 'companies/:companyId',
    component: Components.EditCompaniesComponent,
    pathMatch: 'full',
    data: {
      displayName: `Editer une entreprise`,
    },
    resolve: { _: Resolvers.CompanyResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UiManageCompaniesRoutingModule {}
