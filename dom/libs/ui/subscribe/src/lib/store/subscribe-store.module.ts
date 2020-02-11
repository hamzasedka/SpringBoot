import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ORDER_FEATURE_NAME } from './selectors';
import { ORDERS_REDUCER as COMPANIES_REDUCER } from './reducers';


@NgModule({
  imports: [StoreModule.forFeature(ORDER_FEATURE_NAME, COMPANIES_REDUCER)]
})
export class SubscribeStoreModule { }
