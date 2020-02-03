import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  HttpUrlGenerator
} from '@ngrx/data';
import {
  Entities,
  BaseCollectionService,
  FireBaseDataService,
  FireBaseCollectionService
} from '../../common';
import * as Models from '@dom/common/dto';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddressDataService extends FireBaseDataService<Models.Address> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    afs: AngularFirestore
  ) {
    super(Entities.address, http, httpUrlGenerator, afs);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AddressCollectionService extends FireBaseCollectionService<Models.Address> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(Entities.address, serviceElementsFactory);
  }
}
