import { createReducer, on } from '@ngrx/store';

import * as Actions from '../actions';
import * as State from '../states';

const reducer = createReducer<State.EditCompanyState, Actions.EditCompanyActions>(
    State.EDIT_COMPANY_INITIAL_STATE,
    on(Actions.resetEditCompany, () => ({ ...State.EDIT_COMPANY_INITIAL_STATE })),
    on(Actions.setEditCompany, (state, { companyId }) => ({
        ...state, companyId
    })),
);

export function EDIT_COMPANY_REDUCER(state: State.EditCompanyState, action: Actions.EditCompanyActions): State.EditCompanyState {
    return reducer(state, action);
}
