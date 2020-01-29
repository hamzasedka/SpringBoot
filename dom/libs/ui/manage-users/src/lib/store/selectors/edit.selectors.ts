import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import { UserAccount } from '@dom/common/dto';
import { selectRouteParam } from '@dom/data/ngrx-store';

import * as Selectors from './users.selectors';
import { Entities } from '@dom/data/ngrx-data';

export const EDIT_USERS_TOOL_NAME = 'EditUsers';

export const getManageUsersState = createSelector(Selectors.getFeatureState, state => state.EditUsers);

export const getUserIdFromRoute = createSelector(
  selectRouteParam('userId'), userId => userId
);

const userAccountSelectors = new EntitySelectorsFactory().create<UserAccount>(Entities.userAccount);

export const getEditUserAccount = createSelector(
  getManageUsersState, state => state.user
);
