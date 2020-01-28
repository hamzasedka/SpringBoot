import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { ApplicationState } from '../states/application.state';
import { RouterState } from '../states/router-state';

export const getFeatureState = createFeatureSelector<ApplicationState, RouterReducerState<RouterState>>('router');

export const {
  selectCurrentRoute,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl
} = getSelectors(getFeatureState);
