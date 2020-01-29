import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext): Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const auth = request.headers.authorization as string;
    if (!auth) {
      return of(false);
    }
    const token = auth.slice(6, auth.length).trim();
    if (!token && token.length < 3) {
      return of(false);
    }
    const verifyIdToken = admin.auth().verifyIdToken(token);
    return from(verifyIdToken).pipe(
      map((user) => {
        return !!user && !!user.uid;
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }
}
