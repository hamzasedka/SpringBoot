import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationModule } from '@dom/ui/common';

import { AppLayoutModule } from '@dom/ui/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersStoreModule } from './store';
import * as Components from './components';
import { UiManageUsersRoutingModule } from './ui-manage-users-routing.module';
import { AppMaterialDesignModule } from '@dom/ui/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppLayoutModule,
    UsersStoreModule,
    NotificationModule,
    UiManageUsersRoutingModule,
    AppMaterialDesignModule
  ],
  declarations: [
    Components.UsersComponent,
    Components.UsersListComponent,
    Components.UsersRibbonComponent,
    Components.EditUserComponent
  ],
  exports: [Components.UsersComponent, Components.EditUserComponent],
  entryComponents: [Components.EditUserComponent]
})
export class UiManageUsersModule {}
