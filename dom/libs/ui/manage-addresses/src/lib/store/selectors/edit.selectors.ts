import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import * as Models from '@dom/common/dto';
import { selectRouteParam } from '@dom/data/ngrx-store';

import * as Selectors from './addresses.selectors';
import { Entities } from '@dom/data/ngrx-data';

export const EDIT_ADDRESSES_TOOL_NAME = 'EditAddresses';

export const getManageAddressesState = createSelector(Selectors.getFeatureState, state => state.EditAddresses);

export const getAddressIdFromRoute = createSelector(
  selectRouteParam('addressId'), addressId => addressId
);

const addressSelectors = new EntitySelectorsFactory().create<Models.Address>(Entities.address);

export const getEditAddressUid = createSelector(
  getManageAddressesState, state => state.addressId
);

export const getEditAddressByUid = createSelector(
  addressSelectors.selectEntityMap,
  (dictionary, { uid }) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Address
);


export const getEditAddress = createSelector(
  addressSelectors.selectEntityMap,
  getEditAddressUid,
  (dictionary, uid) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Address
);
