import { Component, OnInit } from '@angular/core';
import { AuthService } from '@dom/infra/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'dom-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  username$ = this.authService.authState$.pipe(map(auth => auth?.email));

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit() {
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }
}
