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
    Services.EntityServices,
    { provide: DataEntityServices, useExisting: Services.EntityServices }
  ]
})
export class AppDataStoreModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entityDataService: EntityDataService,
    addressDataService: EntitiesService.AddressDataService,
    userAccountDataService: EntitiesService.UserAccountDataService
  ) {
    // Entity Metadata
    entityDefinitionService.registerMetadataMap(ENTITY_METADATA);
    // Data Services
    entityDataService.registerService(Entities.address, addressDataService);
    entityDataService.registerService(
      Entities.userAccount,
      userAccountDataService
    );
  }
}
