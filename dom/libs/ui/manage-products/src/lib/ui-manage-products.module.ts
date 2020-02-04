import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as  Components from './components';
import { ProductsStoreModule } from './store';
import { AppMaterialDesignModule, FloatBtnModule } from '@dom/ui/common'
import { UiManageProductsRoutingModule } from './ui-manage-products-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppLayoutModule } from '@dom/ui/layout';

@NgModule({
  imports: [
    CommonModule,
    UiManageProductsRoutingModule,
    ProductsStoreModule,
    AppMaterialDesignModule,
    FloatBtnModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AppLayoutModule
  ],
  declarations: [Components.EditProductsComponent, Components.ProductsComponent, Components.ProductsMenuComponent, Components.ProductsListComponent, Components.EditPriceCardsComponent],
  exports: [Components.ProductsComponent],
  entryComponents: [Components.ProductsComponent]
})
export class UiManageProductsModule { }
