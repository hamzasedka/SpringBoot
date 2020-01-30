import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavItem } from './nav-item';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class NavService {
  appDrawer: MatSidenav;
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

  public toggleNav() {
    this.appDrawer.toggle();
  }

  registerMenuLinks(items: NavItem[]): void {
    const allItems = this.orderItems([...this.navItems.value, ...items]);
    this.navItems.next(allItems);
  }

  private orderItems(items: NavItem[]): NavItem[] {
    const ordredItems = items.sort((a, b) => a.order - b.order);
    for (const item of ordredItems) {
      if (item.children && item.children.length > 0) {
        item.children = this.orderItems(item.children);
      }
    }
    return ordredItems;
  }
}
