import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  HttpUrlGenerator
} from '@ngrx/data';
import { Entities } from './entities';
import { Filter } from '@dom/common/core';

export class BaseDataService<T> extends DefaultDataService<T> {
  constructor(
    entityName: string,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super(entityName, http, httpUrlGenerator);
  }
}

export abstract class BaseCollectionService<
  T
> extends EntityCollectionServiceBase<T> {
  constructor(
    entityName: Entities,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(entityName, serviceElementsFactory);
  }

  setFilter(filterPredicate: Filter<T>): void {
    super.setFilter(filterPredicate);
  }
}
