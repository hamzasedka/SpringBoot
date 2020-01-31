import { createFeatureSelector } from '@ngrx/store';

import * as State from '../states';

export const ADDRESSES_FEATURE_NAME = 'ManageAddresses';

export const getFeatureState = createFeatureSelector<State.AddressesAllFeaturesState, State.AddressesFeatureState>(ADDRESSES_FEATURE_NAME);
