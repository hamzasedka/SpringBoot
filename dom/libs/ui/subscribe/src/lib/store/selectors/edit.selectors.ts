import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import * as Models from '@dom/common/dto';
import { selectRouteParam } from '@dom/data/ngrx-store';

import * as Selectors from './orders.selectors';
import { Entities } from '@dom/data/ngrx-data';

export const EDIT_ORDER_TOOL_NAME = 'EditOrder';

export const getManageOrderState = createSelector(Selectors.getFeatureState, state => state.EditOrder);

export const getOrderIdFromRoute = createSelector(
  selectRouteParam('orderId'), orderId => orderId
);

const oredersSelectors = new EntitySelectorsFactory().create<Models.Order>(Entities.order);

export const getEditOrderUid = createSelector(
  getManageOrderState, state => state.uid
);

export const getEditOrderByUid = createSelector(
  oredersSelectors.selectEntityMap,
  (dictionary, { uid }) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Order
);


export const getEditOrder = createSelector(
  oredersSelectors.selectEntityMap,
  getEditOrderUid,
  (dictionary, uid) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Order
);
