import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UiPublicRoutingModule } from './ui-public-routing.module';
import { LayoutModule } from '@dom/ui/layout';
import { ContactComponent } from './components/contact/contact.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';

@NgModule({
  imports: [CommonModule, UiPublicRoutingModule, LayoutModule],
  declarations: [HomeComponent, ContactComponent, PublicLayoutComponent]
})
export class UiPublicModule {}
