import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as  Components from './components';
import { ProductsStoreModule } from './store';
import { AppMaterialDesignModule } from '@dom/ui/common'
@NgModule({
  imports: [CommonModule, ProductsStoreModule, AppMaterialDesignModule],
  declarations: [Components.EditProductsComponent, Components.ProductsComponent, Components.ProductsMenuComponent, Components.ProductsListComponent]
})
export class UiManageProductsModule { }
