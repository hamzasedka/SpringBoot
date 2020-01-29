import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Components from './components';
import { UsersResolver, UserAcoountResolver } from './resolvers';
import { UserRoles } from '@dom/common/dto';

const USER_ROUTES: Routes = [
  {
    path: '',
    component: Components.UsersComponent,
    pathMatch: 'full',
    data: {
      displayName: 'Manage Users',
      iconName: 'home'
    },
    resolve: { _: UsersResolver}
  },
  {
    path: 'users/:userId',
    component: Components.EditUserComponent,
    pathMatch: 'full',
    data: {
      displayName: `Editer l'utilisateur`,
      iconName: 'supervisor_account',
      permissions: [UserRoles.Users_Read]
    },
    resolve: { _: UserAcoountResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule]
})
export class UiManageUsersRoutingModule {}
