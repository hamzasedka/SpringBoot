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
export class CompaniesDataService extends FireBaseDataService<Models.Company> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    afs: AngularFirestore
  ) {
    super(Entities.company, http, httpUrlGenerator, afs);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CompaniesCollectionService extends BaseCollectionService<Models.Company> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(Entities.company, serviceElementsFactory);
  }
}
