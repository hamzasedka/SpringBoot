import { createFeatureSelector } from '@ngrx/store';

import * as State from '../states';

export const PRODUCTS_FEATURE_NAME = 'ManageProducts';

export const getFeatureState = createFeatureSelector<State.ProductsAllFeaturesState, State.ProductsFeatureState>(PRODUCTS_FEATURE_NAME);
