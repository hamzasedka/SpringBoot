import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  HttpUrlGenerator
} from '@ngrx/data';
import {
  Entities,
  BaseCollectionService,
  FireBaseDataService
} from '../../common';
import * as Models from '@dom/common/dto';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService extends FireBaseDataService<Models.Product> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    afs: AngularFirestore
  ) {
    super(Entities.product, http, httpUrlGenerator, afs);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductsCollectionService extends BaseCollectionService<Models.Product> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(Entities.product, serviceElementsFactory);
  }
}
