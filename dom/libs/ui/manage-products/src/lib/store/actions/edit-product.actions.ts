
import * as Selectors from '../selectors';
import { createAction, props, union } from '@ngrx/store';
import * as Models from '@dom/common/dto';

export const resetsetEditProduct = createAction(
  `[${Selectors.PRODUCTS_FEATURE_NAME}]{${Selectors.EDIT_PRODUCTS_TOOL_NAME}} Reset current product to edit`);
export const setEditProduct = createAction(
  `[${Selectors.PRODUCTS_FEATURE_NAME}]{${Selectors.EDIT_PRODUCTS_TOOL_NAME}} Set current product to edit`,
  props<{ product: Models.Product }>()
);

const actions = union({
  setEditProduct: setEditProduct,
});

export type EditProductActions = typeof actions;
