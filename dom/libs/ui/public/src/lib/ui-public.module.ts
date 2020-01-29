import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { UiPublicRoutingModule } from './ui-public-routing.module';

@NgModule({
  imports: [CommonModule, UiPublicRoutingModule],
  declarations: [HomeComponent]
})
export class UiPublicModule {}
