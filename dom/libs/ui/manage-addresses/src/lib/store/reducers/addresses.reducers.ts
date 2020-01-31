import { ActionReducerMap } from '@ngrx/store';

import * as State from '../states';
import * as EditReducers from './edit-address.reducers';

export const ADDRESSES_REDUCER: ActionReducerMap<State.AddressesFeatureState> = {
  EditAddresses: EditReducers.EDIT_ADDRESS_REDUCER
};
