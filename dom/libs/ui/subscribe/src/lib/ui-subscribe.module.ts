import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as  Components from './components';
import { AppMaterialDesignModule, FloatBtnModule } from '@dom/ui/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AppLayoutModule } from '@dom/ui/layout';
import { UiSubscribeRoutingModule } from './ui-subscribe-routing.module';
import * as Models from './components';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    UiSubscribeRoutingModule,
    AppMaterialDesignModule,
    FloatBtnModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppLayoutModule,
    MatStepperModule
  ],
  declarations: [
    Models.SelectProductComponent,
    Models.CompanyInfosComponent, Models.ExpeditionAddressComponent,
    Models.PaymentMedhodComponent,
    Models.ContractComponent,
    Models.SubscribeComponent,
    Models.SummaryComponent],
  exports: [Components.SubscribeComponent],
  entryComponents: [Components.SubscribeComponent]
})
export class UiSubscribeModule { }
