import { createFeatureSelector } from '@ngrx/store';

import * as State from '../states';

export const COMPANIES_FEATURE_NAME = 'ManageCompanies';

export const getFeatureState = createFeatureSelector<State.CompaniesAllFeaturesState, State.CompaniesFeatureState>(COMPANIES_FEATURE_NAME);
