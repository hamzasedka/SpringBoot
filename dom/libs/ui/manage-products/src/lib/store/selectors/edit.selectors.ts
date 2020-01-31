import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import * as Models from '@dom/common/dto';
import { selectRouteParam } from '@dom/data/ngrx-store';

import * as Selectors from './products.selectors';
import { Entities } from '@dom/data/ngrx-data';

export const EDIT_PRODUCTS_TOOL_NAME = 'EditProducts';

export const getManageProductsState = createSelector(Selectors.getFeatureState, state => state.EditProducts);

export const getProductIdFromRoute = createSelector(
  selectRouteParam('productId'), userId => userId
);

const productSelectors = new EntitySelectorsFactory().create<Models.Product>(Entities.product);

export const getEditProductUid = createSelector(
  getManageProductsState, state => state.productId
);

export const getEditProductByUid = createSelector(
  productSelectors.selectEntityMap,
  (productsDictionary, {uid}) => !!productsDictionary[uid] ? productsDictionary[uid] : undefined as Models.Product
);


export const getEditProduct = createSelector(
  productSelectors.selectEntityMap,
  getEditProductUid,
  (productsDictionary, uid) => !!productsDictionary[uid] ? productsDictionary[uid] : undefined as Models.Product
);
