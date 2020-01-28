import { Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}
export interface RouterState {
  url: string;
  root: RouterStateUrl;
}
