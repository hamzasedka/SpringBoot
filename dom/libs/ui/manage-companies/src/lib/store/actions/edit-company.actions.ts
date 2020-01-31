
import * as Selectors from '../selectors';
import { createAction, props, union } from '@ngrx/store';

export const resetEditCompany = createAction(
  `[${Selectors.COMPANIES_FEATURE_NAME}]{${Selectors.EDIT_COMPANIES_TOOL_NAME}} Reset current company to edit`);
export const setEditCompany = createAction(
  `[${Selectors.COMPANIES_FEATURE_NAME}]{${Selectors.EDIT_COMPANIES_TOOL_NAME}} Set current company to edit`,
  props<{ companyId: string }>()
);

const actions = union({
  setEditProduct: setEditCompany,
});

export type EditCompanyActions = typeof actions;
