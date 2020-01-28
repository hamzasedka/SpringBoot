import { RouterReducerState } from '@ngrx/router-store';
import { RouterState } from './router-state';
// Representation of the entire application state
// Will be extended by lazy-loaded modules
export interface ApplicationState {
  router: RouterReducerState<RouterState>;
}
