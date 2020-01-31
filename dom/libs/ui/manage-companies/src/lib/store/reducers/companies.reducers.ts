import { ActionReducerMap } from '@ngrx/store';

import * as State from '../states';
import * as EditReducers from './edit-company.reducers';

export const PRODUCTS_REDUCER: ActionReducerMap<State.CompaniesFeatureState> = {
  EditCompanies: EditReducers.EDIT_COMPANY_REDUCER
};
