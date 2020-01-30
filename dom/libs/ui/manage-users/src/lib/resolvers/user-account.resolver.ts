import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { select, Store as NgRxStore } from '@ngrx/store';
import { EMPTY, from, Observable, combineLatest, of } from 'rxjs';
import { catchError, switchMap, take, tap, map, filter } from 'rxjs/operators';

import { EntityServices } from '@dom/data/ngrx-data';
import * as Store from '../store';
import { UserAccount } from '@dom/common/dto';
import { AuthService } from '@dom/infra/auth';

@Injectable({
  providedIn: 'root'
})
export class UserAcoountResolver implements Resolve<UserAccount> {
  constructor(
    private readonly router: Router,
    private readonly entityServices: EntityServices,
    private readonly store: NgRxStore<Store.UsersAllFeaturesState>,
    private readonly authService: AuthService
  ) { }

  resolve(): Observable<UserAccount> | Observable<never> {
    return this.store.pipe(select(Store.getUserIdFromRoute)).pipe(
      switchMap(uid => {
        if (uid) {
          return of(uid);
        }
        return this.authService.authState$.pipe(map(u => u.uid));
      }),
      filter(uid => !!uid),
      take(1),
      switchMap(uid =>
        !!uid ?
          combineLatest([
            this.entityServices.userAccountCollectionService.getByKey(uid).pipe(
              switchMap(user => {
                return this.authService.getAthUser(user.uid).pipe(
                  map(authUser => ({ ...user, ...authUser })),
                  tap(u => {
                    this.entityServices.userAccountCollectionService.updateOneInCache(u);
                  })
                );
              })
            ),
            this.authService.getAthUser(uid)
          ]).pipe(map(([user, authUser]) => {
            return { ...user, ...authUser };
          }))
          : this.fail()),
      tap(userAccount => {
        this.store.dispatch(Store.setEditUserAccount({ user: userAccount }));
      }),
      catchError(() => this.fail())
    );
  }

  private fail(): Observable<never> {
    return from(this.router.navigate(['/', 'error'])).pipe(
      switchMap(() => EMPTY),
      catchError(() => EMPTY)
    );
  }
}
