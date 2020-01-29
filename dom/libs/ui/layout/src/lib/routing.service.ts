import { Injectable, OnDestroy } from '@angular/core';
import {
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterEvent
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

const DEFAULT_TOOL_NAME = 'Home';

const DEFAULT_TOOL_PATH = '';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  toolName$: Observable<string>;
  private toolName = new BehaviorSubject<string>(DEFAULT_TOOL_NAME);

  toolPath$: Observable<string>;
  private toolPath = new BehaviorSubject<string>(DEFAULT_TOOL_PATH);

  constructor(public router: Router) {
    this.toolName$ = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(
        tap((routeEvent: NavigationEnd) => {
          this.updateToolNameAndPath(routeEvent);
        }),
        switchMap(() => this.toolName.asObservable())
      );
    this.toolPath$ = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(
        tap((routeEvent: NavigationEnd) => {
          this.updateToolNameAndPath(routeEvent);
        }),
        switchMap(() => this.toolPath.asObservable())
      );
  }

  getPageName(routerEvent: RouterEvent): string {
    const baseUrl = '/';
    const urlTree = this.router.parseUrl(routerEvent.url).root;
    const urlSegmentGroup = urlTree.children[PRIMARY_OUTLET];
    if (!urlSegmentGroup) {
      return baseUrl;
    }
    const urlPaths = urlSegmentGroup.segments.map(it => it.path);
    return baseUrl + urlPaths.join('/');
  }

  private updateToolNameAndPath(routerEvent: NavigationEnd): void {
    let route = this.router.routerState.root.snapshot;
    let routeRoot = true;
    while (route.children.length) {
      route = route.firstChild;
      if (
        route.outlet !== PRIMARY_OUTLET ||
        (!route.routeConfig.path && !routeRoot)
      ) {
        continue;
      }
      routeRoot = false;
      this.toolPath.next(route.pathFromRoot[1]?.url[0]?.path);
      if (route.data) {
        if (route.data.toolName) {
          this.toolName.next(route.data.toolName);
        }
      }
    }
  }
}
