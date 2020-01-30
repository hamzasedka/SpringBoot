import { createReducer, on } from '@ngrx/store';

import * as Actions from '../actions';
import * as State from '../states';

const reducer = createReducer<State.EditProductState, Actions.EditProductActions>(
    State.EDIT_USER_INITIAL_STATE,
    on(Actions.resetsetEditProduct, () => ({ ...State.EDIT_USER_INITIAL_STATE })),
    on(Actions.setEditProduct, (state, { product }) => ({
        ...state, product
    })),
);

export function EDIT_PRODUCT_REDUCER(state: State.EditProductState, action: Actions.EditProductActions): State.EditProductState {
    return reducer(state, action);
}
