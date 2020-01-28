import { routerReducer as RouterReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { ApplicationState } from '../states';

export const APPLICATION_REDUCERS: ActionReducerMap<ApplicationState> = {
  router: RouterReducer
};
