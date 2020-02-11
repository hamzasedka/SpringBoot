import { ActionReducerMap } from '@ngrx/store';

import * as State from '../states';
import * as EditReducers from './edit-order.reducers';

export const ORDERS_REDUCER: ActionReducerMap<State.OrderFeatureState> = {
  EditOrder: EditReducers.EDIT_ORDER_REDUCER
};
