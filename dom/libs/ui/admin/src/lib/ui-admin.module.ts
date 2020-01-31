import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppLayoutModule } from '@dom/ui/layout';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { UiPublicRoutingModule } from './ui-admin-routing.module';
import { UnicornCandyAppModule } from '@dom/ui/common';

@NgModule({
  imports: [CommonModule, AppLayoutModule, UiPublicRoutingModule, UnicornCandyAppModule],
  declarations: [HomeComponent, AdminLayoutComponent]
})
export class UiAdminModule {}
