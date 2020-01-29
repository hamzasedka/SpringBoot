import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from '@dom/ui/layout';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { UiPublicRoutingModule } from './ui-admin-routing.module';

@NgModule({
  imports: [CommonModule, LayoutModule, UiPublicRoutingModule],
  declarations: [HomeComponent, AdminLayoutComponent]
})
export class UiAdminModule {}
