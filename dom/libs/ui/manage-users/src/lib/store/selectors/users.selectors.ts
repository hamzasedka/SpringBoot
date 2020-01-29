import { createFeatureSelector } from '@ngrx/store';

import * as State from '../states';

export const USERS_FEATURE_NAME = 'ManageUsers';

export const getFeatureState = createFeatureSelector<State.UsersAllFeaturesState, State.UsersFeatureState>(USERS_FEATURE_NAME);
