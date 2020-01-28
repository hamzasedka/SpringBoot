import { Injectable } from '@angular/core';
import { EntityServicesBase, EntityServicesElements } from '@ngrx/data';
import {
  AddressCollectionService,
  UserAccountCollectionService
} from './entities';

@Injectable()
export class EntityServices extends EntityServicesBase {
  constructor(
    entityServicesElements: EntityServicesElements,
    readonly addressCollectionService: AddressCollectionService,
    readonly userAccountCollectionService: UserAccountCollectionService
  ) {
    super(entityServicesElements);
    this.registerEntityCollectionServices([
      addressCollectionService,
      userAccountCollectionService
    ]);
  }
}
