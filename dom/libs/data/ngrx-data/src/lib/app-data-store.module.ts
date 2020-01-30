import { NgModule } from '@angular/core';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityServices as DataEntityServices
} from '@ngrx/data';

import { Entities, ENTITY_METADATA } from './common';
import * as Services from './services';
import * as EntitiesService from './services/entities';

@NgModule({
  providers: [
    Services.AppEntityServices,
    { provide: DataEntityServices, useExisting: Services.AppEntityServices }
  ]
})
export class AppDataStoreModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entityDataService: EntityDataService,
    addressDataService: EntitiesService.AddressDataService,
    userAccountDataService: EntitiesService.UserAccountDataService,
    productsDataService: EntitiesService.ProductsDataService
  ) {
    // Entity Metadata
    entityDefinitionService.registerMetadataMap(ENTITY_METADATA);
    // Data Services
    entityDataService.registerService(Entities.address, addressDataService);
    entityDataService.registerService(Entities.userAccount,userAccountDataService);
    entityDataService.registerService(Entities.product,productsDataService);
  }
}
