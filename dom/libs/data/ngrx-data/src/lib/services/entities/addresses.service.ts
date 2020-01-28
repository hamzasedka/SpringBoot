import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  HttpUrlGenerator
} from '@ngrx/data';
import {
  Entities,
  BaseDataService,
  BaseCollectionService,
  FireBaseDataService
} from '../../common';
import { Address } from '@dom/common/dto';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddressDataService extends FireBaseDataService<Address> {
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
export class AddressCollectionService extends BaseCollectionService<Address> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(Entities.address, serviceElementsFactory);
  }
}
