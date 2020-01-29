import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavService } from './nav.service';
import { DialogLayoutComponent } from './dialog-layout/dialog-layout.component';
import { AppMaterialDesignModule } from '@dom/ui/common';
@NgModule({
  declarations: [
    CommonLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuListItemComponent,
    TopNavComponent,
    DialogLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialDesignModule
  ],
  exports: [CommonLayoutComponent, DialogLayoutComponent],
  providers: [NavService]
})
export class LayoutModule {}
