import { ApplicationState } from '@dom/data/ngrx-store';

import * as Selectors from '../selectors';
import * as Edit from './edit-company.state';

export interface CompaniesFeatureState {
  [Selectors.EDIT_COMPANIES_TOOL_NAME]: Edit.EditCompanyState;
}

export const INITIAL_STATE: CompaniesFeatureState = {
  [Selectors.EDIT_COMPANIES_TOOL_NAME]: Edit.EDIT_COMPANY_INITIAL_STATE,
};

export interface CompaniesAllFeaturesState
 extends ApplicationState {
  [Selectors.COMPANIES_FEATURE_NAME]: CompaniesFeatureState;
}
