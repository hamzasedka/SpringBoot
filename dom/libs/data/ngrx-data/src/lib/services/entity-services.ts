import { Injectable } from '@angular/core';
import { EntityServicesBase, EntityServicesElements } from '@ngrx/data';
import {
  AddressCollectionService,
  UserAccountCollectionService,
  ProductsCollectionService,
  CompaniesCollectionService,
  StorageDocumentsCollectionService
} from './entities';

@Injectable()
export class AppEntityServices extends EntityServicesBase {
  constructor(
    entityServicesElements: EntityServicesElements,
    readonly addressCollectionService: AddressCollectionService,
    readonly userAccountCollectionService: UserAccountCollectionService,
    readonly productsCollectionService: ProductsCollectionService,
    readonly companiesCollectionService: CompaniesCollectionService,
    readonly storageDocumentsCollectionService: StorageDocumentsCollectionService
  ) {
    super(entityServicesElements);
    this.registerEntityCollectionServices([
      addressCollectionService,
      userAccountCollectionService,
      productsCollectionService,
      companiesCollectionService,
      storageDocumentsCollectionService
    ]);
  }
}
