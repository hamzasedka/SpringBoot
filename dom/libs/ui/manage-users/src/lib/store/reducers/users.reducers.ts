import { ActionReducerMap } from '@ngrx/store';

import * as Selectors from '../selectors';
import * as State from '../states';
import * as EditUser from './edit-user.reducers';

export const USERS_REDUCER: ActionReducerMap<State.UsersFeatureState> = {
  EditUsers: EditUser.EDIT_USER_REDUCER
};
