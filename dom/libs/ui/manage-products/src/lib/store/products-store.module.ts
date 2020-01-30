import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PRODUCTS_FEATURE_NAME } from './selectors';
import { PRODUCTS_REDUCER } from './reducers';


@NgModule({
  imports: [StoreModule.forFeature(PRODUCTS_FEATURE_NAME, PRODUCTS_REDUCER)]
})
export class ProductsStoreModule { }
