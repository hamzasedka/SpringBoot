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
import { AngularFirestore } from '@angular/fire/firestore';
import * as Models from '@dom/common/dto';

@Injectable({
  providedIn: 'root'
})
export class StorageDocumentDataService extends FireBaseDataService<Models.StorageDocument> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    afs: AngularFirestore
  ) {
    super(Entities.storageDocument, http, httpUrlGenerator, afs);
  }
}

@Injectable({
  providedIn: 'root'
})
export class StorageDocumentsCollectionService extends FireBaseCollectionService<Models.StorageDocument> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(Entities.storageDocument, serviceElementsFactory);
  }
}
