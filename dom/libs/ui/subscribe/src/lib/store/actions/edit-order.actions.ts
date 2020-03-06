
import * as Selectors from '../selectors';
import { createAction, props, union } from '@ngrx/store';
import * as Models from '@dom/common/dto';

export const resetEditOrder = createAction(
  `[${Selectors.ORDER_FEATURE_NAME}]{${Selectors.EDIT_ORDER_TOOL_NAME}} Reset current order to edit`);

export const setEditOrder = createAction(
  `[${Selectors.ORDER_FEATURE_NAME}]{${Selectors.EDIT_ORDER_TOOL_NAME}} Set current order to edit`,
  props<{ order: Models.Order }>()
);

export const upsertHostingOrderItem = createAction(
  `[${Selectors.ORDER_FEATURE_NAME}]{${Selectors.EDIT_ORDER_TOOL_NAME}} Upsert hosting order Item`,
  props<{ productId: string }>()
);

const actions = union({
  setEditOrder: setEditOrder,
  upsertHostingOrderItem: upsertHostingOrderItem
});

export type EditOrederActions = typeof actions;
