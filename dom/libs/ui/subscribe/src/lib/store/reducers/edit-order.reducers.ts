import { createReducer, on } from '@ngrx/store';

import * as Actions from '../actions';
import * as State from '../states';

const reducer = createReducer<State.EditOrderState, Actions.EditOrederActions>(
    State.EDIT_ORDER_INITIAL_STATE,
    on(Actions.resetEditOrder, () => ({ ...State.EDIT_ORDER_INITIAL_STATE })),
    on(Actions.setEditOrder, (state, { order }) => ({
        ...state, ...order
    })),
    on(Actions.upsertHostingOrderItem, (state, { orderItem }) => ({
      ...state, orderItems : [...state.orderItems.filter(x => x.productId)]
  }))
);

export function EDIT_ORDER_REDUCER(state: State.EditOrderState, action: Actions.EditOrederActions): State.EditOrderState {
    return reducer(state, action);
}
