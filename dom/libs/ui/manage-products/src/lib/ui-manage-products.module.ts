import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as  Components from './components';
import { ProductsStoreModule } from './store';
import { AppMaterialDesignModule, FloatBtnModule } from '@dom/ui/common'
import { UiManageProductsRoutingModule } from './ui-manage-products-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    UiManageProductsRoutingModule,
    ProductsStoreModule,
    AppMaterialDesignModule,
    FloatBtnModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  declarations: [Components.EditProductsComponent, Components.ProductsComponent, Components.ProductsMenuComponent, Components.ProductsListComponent],
  exports: [Components.ProductsComponent],
  entryComponents: [Components.ProductsComponent]
})
export class UiManageProductsModule { }
