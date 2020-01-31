import { EntitySelectorsFactory } from '@ngrx/data';
import { createSelector } from '@ngrx/store';
import * as Models from '@dom/common/dto';
import { selectRouteParam } from '@dom/data/ngrx-store';

import * as Selectors from './companies.selectors';
import { Entities } from '@dom/data/ngrx-data';

export const EDIT_COMPANIES_TOOL_NAME = 'EditCompanies';

export const getManagecompaniesState = createSelector(Selectors.getFeatureState, state => state.EditCompanies);

export const getCompanyIdFromRoute = createSelector(
  selectRouteParam('companyId'), companyId => companyId
);

const companySelectors = new EntitySelectorsFactory().create<Models.Company>(Entities.company);

export const getEditcompanyUid = createSelector(
  getManagecompaniesState, state => state.companyId
);

export const getEditCompanyByUid = createSelector(
  companySelectors.selectEntityMap,
  (dictionary, { uid }) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Company
);


export const getEditCompany = createSelector(
  companySelectors.selectEntityMap,
  getEditcompanyUid,
  (dictionary, uid) => !!dictionary[uid] ? dictionary[uid] : undefined as Models.Company
);
