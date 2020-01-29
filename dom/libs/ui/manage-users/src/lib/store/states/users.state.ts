import { ApplicationState } from '@dom/data/ngrx-store';

import * as Selectors from '../selectors';
import * as Edit from './edit-user.state';

export interface UsersFeatureState {
  [Selectors.EDIT_USERS_TOOL_NAME]: Edit.EditUserState;
}

export const INITIAL_STATE: UsersFeatureState = {
  [Selectors.EDIT_USERS_TOOL_NAME]: Edit.EDIT_USER_INITIAL_STATE,
};

export interface UsersAllFeaturesState
 extends ApplicationState {
  [Selectors.USERS_FEATURE_NAME]: UsersFeatureState;
}
