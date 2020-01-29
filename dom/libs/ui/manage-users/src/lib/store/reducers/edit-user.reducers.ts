import { createReducer, on } from '@ngrx/store';

import * as Actions from '../actions';
import * as State from '../states';

const reducer = createReducer<State.EditUserState, Actions.EditUserActions>(
    State.EDIT_USER_INITIAL_STATE,
    on(Actions.resetsetEditUserAccount, () => ({ ...State.EDIT_USER_INITIAL_STATE })),
    on(Actions.setEditUserAccount, (state, { user }) => ({
        ...state, user
    })),
);

export function EDIT_USER_REDUCER(state: State.EditUserState, action: Actions.EditUserActions): State.EditUserState {
    return reducer(state, action);
}
