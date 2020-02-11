import { ApplicationState } from '@dom/data/ngrx-store';

import * as Selectors from '../selectors';
import * as Edit from './edit-order.state';

export interface OrderFeatureState {
  [Selectors.EDIT_ORDER_TOOL_NAME]: Edit.EditOrderState;
}

export const INITIAL_STATE: OrderFeatureState = {
  [Selectors.EDIT_ORDER_TOOL_NAME]: Edit.EDIT_ORDER_INITIAL_STATE,
};

export interface OrderAllFeaturesState
 extends ApplicationState {
  [Selectors.ORDER_FEATURE_NAME]: OrderFeatureState;
}
