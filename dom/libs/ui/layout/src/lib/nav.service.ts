import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavItem } from './nav-item';
import { Routes } from '@angular/router';

@Injectable()
export class NavService {
  appDrawer: any;
  navItems$: Observable<NavItem[]>;
  private readonly navItems = new BehaviorSubject<NavItem[]>([]);
  constructor() {
    this.navItems$ = this.navItems.asObservable();
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  constructMenuLinks(routes: Routes): void {
    const buildedNav = this.buildMenuLinks('admin', routes);
    this.navItems.next([...this.navItems.value, ...buildedNav]);
  }

  private buildMenuLinks(parentPath: string, routes: Routes): NavItem[] {
    const menuLinks: NavItem[] = [];
    for (const route of routes) {
      if (!route.data) {
        continue;
      }
      const navItem: NavItem = {
        route: `${parentPath}/${route.path}`,
        iconName: route.data.iconName,
        displayName: route.data.displayName,
        expanded: route.data.expanded
      };
      if (route.children && route.children.length > 0) {
        for (const childRoute of route.children) {
          navItem.children = [
            ...(navItem.children ? Array.from(navItem.children) : []),
            ...this.buildMenuLinks(navItem.route, [childRoute])
          ];
        }
      }
      menuLinks.push(navItem);
    }
    return menuLinks;
  }
}
