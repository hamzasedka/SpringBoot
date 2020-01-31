import { ApplicationState } from '@dom/data/ngrx-store';

import * as Selectors from '../selectors';
import * as Edit from './edit-address.state';

export interface AddressesFeatureState {
  [Selectors.EDIT_ADDRESSES_TOOL_NAME]: Edit.EditAddressState;
}

export const INITIAL_STATE: AddressesFeatureState = {
  [Selectors.EDIT_ADDRESSES_TOOL_NAME]: Edit.EDIT_ADDRESS_INITIAL_STATE,
};

export interface AddressesAllFeaturesState
 extends ApplicationState {
  [Selectors.ADDRESSES_FEATURE_NAME]: AddressesFeatureState;
}
