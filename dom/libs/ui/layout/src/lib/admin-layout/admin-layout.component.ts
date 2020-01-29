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

@Component({
  selector: 'dom-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements AfterViewInit {

  @ViewChild('appDrawer', { static: true }) appDrawer: MatSidenav;

  navItems$: Observable<NavItem[]>;

  @Output() readonly disconnectButtonClick = new EventEmitter<MouseEvent>();

  @Input() userName;

  constructor(
    private router: Router,
    private readonly navService: NavService
  ) {
    this.navItems$ = navService.navItems$;
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  async logout() {
    this.disconnectButtonClick.emit();
  }
}
