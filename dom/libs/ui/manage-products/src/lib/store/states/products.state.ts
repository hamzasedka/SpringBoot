import { ApplicationState } from '@dom/data/ngrx-store';

import * as Selectors from '../selectors';
import * as Edit from './edit-product.state';

export interface ProductsFeatureState {
  [Selectors.EDIT_PRODUCTS_TOOL_NAME]: Edit.EditProductState;
}

export const INITIAL_STATE: ProductsFeatureState = {
  [Selectors.EDIT_PRODUCTS_TOOL_NAME]: Edit.EDIT_USER_INITIAL_STATE,
};

export interface ProductsAllFeaturesState
 extends ApplicationState {
  [Selectors.PRODUCTS_FEATURE_NAME]: ProductsFeatureState;
}
