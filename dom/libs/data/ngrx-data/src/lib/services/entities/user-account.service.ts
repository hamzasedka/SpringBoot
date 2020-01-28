import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  HttpUrlGenerator
} from '@ngrx/data';
import {
  Entities,
  FireBaseDataService,
  FireBaseCollectionService,
  QueryPredicates,
  QueryPredicate
} from '../../common';
import { UserAccount } from '@dom/common/dto';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth,  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserAccountDataService extends FireBaseDataService<UserAccount> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    afs: AngularFirestore,
    private firebaseAuth: AngularFireAuth
  ) {
    super(Entities.userAccount, http, httpUrlGenerator, afs);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserAccountCollectionService extends FireBaseCollectionService<
  UserAccount
> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(Entities.userAccount, serviceElementsFactory);
  }

  getByEmail(username: string): Observable<UserAccount[]> {
    return this.getWithQueryPredicates(
      new QueryPredicates(new QueryPredicate('email', '==', username))
    );
  }

  emailExist(username: string): Observable<boolean> {
    return this.getByEmail(username).pipe(
      map(users => !!users && users.length > 0)
    );
  }
}
