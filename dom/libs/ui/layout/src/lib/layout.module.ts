import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { RouterModule } from '@angular/router';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavService } from './nav.service';
import { DialogLayoutComponent } from './dialog-layout/dialog-layout.component';
import { AppMaterialDesignModule, NotificationModule } from '@dom/ui/common';
@NgModule({
  declarations: [
    CommonLayoutComponent,
    MenuListItemComponent,
    TopNavComponent,
    DialogLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialDesignModule,
    NotificationModule
  ],
  exports: [CommonLayoutComponent, DialogLayoutComponent, NotificationModule],
  providers: [NavService]
})
export class LayoutModule {}
