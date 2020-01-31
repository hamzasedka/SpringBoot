import { createReducer, on } from '@ngrx/store';

import * as Actions from '../actions';
import * as State from '../states';

const reducer = createReducer<State.EditAddressState, Actions.EditAddressActions>(
    State.EDIT_ADDRESS_INITIAL_STATE,
    on(Actions.resetEditAddress, () => ({ ...State.EDIT_ADDRESS_INITIAL_STATE })),
    on(Actions.setEditAddress, (state, { addressId }) => ({
        ...state, addressId
    })),
);

export function EDIT_ADDRESS_REDUCER(state: State.EditAddressState, action: Actions.EditAddressActions): State.EditAddressState {
    return reducer(state, action);
}
