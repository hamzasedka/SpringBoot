
import * as Selectors from '../selectors';
import { createAction, props, union } from '@ngrx/store';
import { UserAccount } from '@dom/common/dto';

export const resetsetEditUserAccount = createAction(
  `[${Selectors.USERS_FEATURE_NAME}]{${Selectors.EDIT_USERS_TOOL_NAME}} Reset current user account to edit`);
export const setEditUserAccount = createAction(
  `[${Selectors.USERS_FEATURE_NAME}]{${Selectors.EDIT_USERS_TOOL_NAME}} Set current user account to edit`,
  props<{ user: UserAccount }>()
);

const actions = union({
  setEditUserAccount,
});

export type EditUserActions = typeof actions;
