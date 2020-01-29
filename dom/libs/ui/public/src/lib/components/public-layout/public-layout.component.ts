import { Component, OnInit } from '@angular/core';
import { AuthService } from '@dom/infra/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dom-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  username$ = this.authService.authState$.pipe(map(auth => auth?.email));

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
