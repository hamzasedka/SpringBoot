import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UiPublicRoutingModule } from './ui-public-routing.module';
import { LayoutModule } from '@dom/ui/layout';
import { ContactComponent } from './components/contact/contact.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AppMaterialDesignModule } from '@dom/ui/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './components';

@NgModule({
  imports: [
    CommonModule,
    UiPublicRoutingModule,
    LayoutModule,
    AppMaterialDesignModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, ContactComponent, PublicLayoutComponent, LoginComponent],
  providers:[LoginGuard]
})
export class UiPublicModule { }
