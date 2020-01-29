import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { take, switchMap, map, tap } from 'rxjs/operators';
import { UserAccountCollectionService } from '@dom/data/ngrx-data';
import { UserAccount } from '@dom/common/dto';
import { AuthService } from '@dom/infra/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<UserAccount[]> {
  constructor(
    private readonly userAccountService: UserAccountCollectionService,
    private readonly authService: AuthService
  ) { }

  resolve(): Observable<UserAccount[]> {
    return this.userAccountService.getAll().pipe(
      switchMap(users => {
        return combineLatest(users.map(user => {
          return this.authService.getAthUser(user.uid).pipe(
            tap(console.log),
            map(authUser => ({ ...user, ...authUser })),
            tap(u => {
              this.userAccountService.updateOneInCache(u);
            })
            );
        }));
      }),
      take(1)
    );
  }
}
