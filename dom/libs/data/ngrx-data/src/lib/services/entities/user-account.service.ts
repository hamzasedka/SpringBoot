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
import * as Models from '@dom/common/dto';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth,  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserAccountDataService extends FireBaseDataService<Models.UserAccount> {
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
export class UserAccountCollectionService extends FireBaseCollectionService<Models.UserAccount> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(Entities.userAccount, serviceElementsFactory);
  }

  getByEmail(username: string): Observable<Models.UserAccount[]> {
    return this.getWithQueryPredicates(
      new QueryPredicates<Models.UserAccount>(new QueryPredicate<Models.UserAccount>('email', '==', username))
    );
  }

  emailExist(username: string): Observable<boolean> {
    return this.getByEmail(username).pipe(
      map(users => !!users && users.length > 0)
    );
  }
}
