import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private readonly angularFireAuthGuard: AngularFireAuthGuard, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.angularFireAuthGuard.canActivate(route, state)
      .pipe(
        tap(canActivate => {
          if (!canActivate) {
            this.router.navigate(['/login']);
          }
        })
      );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.angularFireAuthGuard.canActivate(childRoute, state)
      .pipe(
        tap(canActivate => {
          if (!canActivate) {
            this.router.navigate(['/login']);
          }
        })
      );;
  }
}
