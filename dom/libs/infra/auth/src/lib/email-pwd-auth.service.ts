import { Injectable, Inject } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';
import { map, switchMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL_TOKEN } from '@dom/common/core';
import { UserAccount } from '@dom/common/dto';
import { User } from 'firebase';


@Injectable()
export class AuthService {

  authState$: Observable<User> = this.firebaseAuth.authState;

  isLogged$: Observable<boolean> = this.authState$.pipe(
    map(user => !!user && !!user.email)
  );

  constructor(
    private readonly httpClient: HttpClient,
    private firebaseAuth: AngularFireAuth,
    @Inject(API_URL_TOKEN) private readonly apiUrl: string) {}

  login(user: UserAccount): Observable<User> {
    const signInPromise = this.firebaseAuth.auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
    return from(signInPromise).pipe(
      map(u => u?.user)
    );
  }

  logout(): Promise<void> {
    return this.firebaseAuth.auth.signOut();
  }

  emailSignUp(user: UserAccount): Observable<User> {
   return this.createAthUser(user).pipe(switchMap(u => this.login(user)));
  }

  getAthUser(uid: string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/user/${uid}`);
  }

  createAthUser(userAccount: UserAccount): Observable<User> {
    const user: any = {};
    if (userAccount.email) {
      user.email = userAccount.email;
    }
    if (userAccount.password) {
      user.password = userAccount.password;
    }
    if (userAccount.firstname && userAccount.lastname) {
      user.displayName = `${userAccount.firstname} ${userAccount.lastname}`;
    }
    if (userAccount.phoneNumber) {
      user.phoneNumber = userAccount.phoneNumber;
    }
    if (userAccount.roles) {
      user.roles = userAccount.roles;
    }
    return this.httpClient.post<User>(`${this.apiUrl}/user`, userAccount);
  }

  updateAthUser(userAccount: UserAccount): Observable<User> {
    const user: any = {
      uid: userAccount.uid
    };
    if (userAccount.email) {
      user.email = userAccount.email;
    }
    if (userAccount.password) {
      user.password = userAccount.password;
    }
    if (userAccount.firstname && userAccount.lastname) {
      user.displayName = `${userAccount.firstname} ${userAccount.lastname}`;
    }
    if (userAccount.phoneNumber) {
      user.phoneNumber = userAccount.phoneNumber;
    }
    if (userAccount.roles) {
      user.roles = userAccount.roles;
    }
    return this.httpClient.put<User>(`${this.apiUrl}/user`, user);
  }
}
