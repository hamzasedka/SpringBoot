import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { USERS_FEATURE_NAME } from './selectors';
import { USERS_REDUCER } from './reducers';


@NgModule({
  imports: [StoreModule.forFeature(USERS_FEATURE_NAME, USERS_REDUCER)]
})
export class UsersStoreModule { }
