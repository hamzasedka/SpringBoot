import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: async () => import('@dom/ui/public').then(m => m.UiPublicModule)
  },
  {
    path: '',
    loadChildren: async () => import('@dom/ui/admin').then(m => m.UiAdminModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
