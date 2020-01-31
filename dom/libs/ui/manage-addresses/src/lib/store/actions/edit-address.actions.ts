
import * as Selectors from '../selectors';
import { createAction, props, union } from '@ngrx/store';

export const resetEditAddress = createAction(
  `[${Selectors.ADDRESSES_FEATURE_NAME}]{${Selectors.EDIT_ADDRESSES_TOOL_NAME}} Reset current address to edit`);

export const setEditAddress = createAction(
  `[${Selectors.ADDRESSES_FEATURE_NAME}]{${Selectors.EDIT_ADDRESSES_TOOL_NAME}} Set current address to edit`,
  props<{ addressId: string }>()
);

const actions = union({
  setEditAddress: setEditAddress,
});

export type EditAddressActions = typeof actions;
