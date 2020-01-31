import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ADDRESSES_FEATURE_NAME } from './selectors';
import { ADDRESSES_REDUCER as COMPANIES_REDUCER } from './reducers';


@NgModule({
  imports: [StoreModule.forFeature(ADDRESSES_FEATURE_NAME, COMPANIES_REDUCER)]
})
export class AddressesStoreModule { }
