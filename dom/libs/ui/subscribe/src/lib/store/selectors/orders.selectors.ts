import { createFeatureSelector } from '@ngrx/store';

import * as State from '../states';

export const ORDER_FEATURE_NAME = 'ManageOrders';

export const getFeatureState = createFeatureSelector<State.OrderAllFeaturesState, State.OrderFeatureState>(ORDER_FEATURE_NAME);
