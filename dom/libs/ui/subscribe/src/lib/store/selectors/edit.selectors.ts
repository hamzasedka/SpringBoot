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

const ordersSelectors = new EntitySelectorsFactory().create<Models.Order>(Entities.order);
const productSelectors = new EntitySelectorsFactory().create<Models.Product>(Entities.product);

export const getEditOrderUid = createSelector(
  getManageOrderState, state => state.uid
);

export const getEditOrderByUid = createSelector(
  ordersSelectors.selectEntityMap,
  (dictionary, { uid }) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Order
);


export const getEditOrder = createSelector(
  ordersSelectors.selectEntityMap,
  getEditOrderUid,
  (dictionary, uid) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Order
);


export const getMainHostingProductOfCurrentOrder = createSelector(
  getManageOrderState,productSelectors.selectEntityMap, (state, dictionary) => {
    return dictionary[state?.hostingItem?.productId];
  }
);


export const getHostingPriceCards = createSelector(
  getMainHostingProductOfCurrentOrder, state => {
    return state?.priceCards
  }
);
