import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { COMPANIES_FEATURE_NAME } from './selectors';
import { PRODUCTS_REDUCER as COMPANIES_REDUCER } from './reducers';


@NgModule({
  imports: [StoreModule.forFeature(COMPANIES_FEATURE_NAME, COMPANIES_REDUCER)]
})
export class CompaniesStoreModule { }
