import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav.service';
import { NavItem } from '../nav-item';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'dom-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements AfterViewInit {

  @Input() color = 'primary';

  @ViewChild('appDrawer', { static: true }) appDrawer: MatSidenav;

  navItems$: Observable<NavItem[]>;

  @Output() readonly disconnectButtonClick = new EventEmitter<MouseEvent>();

  @Input() userName;

  constructor(
    private router: Router,
    private readonly navService: NavService
  ) {
    this.navItems$ = navService.navItems$.pipe(tap(console.log));
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  async logout() {
    this.disconnectButtonClick.emit();
  }
}
