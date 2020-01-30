import { ActionReducerMap } from '@ngrx/store';

import * as State from '../states';
import * as EditUser from './edit-product.reducers';

export const PRODUCTS_REDUCER: ActionReducerMap<State.ProductsFeatureState> = {
  EditProducts: EditUser.EDIT_PRODUCT_REDUCER
};
