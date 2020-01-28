import { NgModule, ModuleWithProviders } from '@angular/core';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppDataStoreModule , BuildDefaultDataServiceConfig} from '@dom/data/ngrx-data';
import { APPLICATION_REDUCERS } from './reducers';
import { APPLICATION_EFFECTS } from './effects';
import { StoreDevtoolsConfig } from '@ngrx/store-devtools';
import { API_URL_TOKEN } from '@dom/common/core';

@NgModule({
  imports: [
    StoreModule.forRoot(APPLICATION_REDUCERS),
    StoreDevtoolsModule.instrument({
      name: `DOMICILIATION-FACILE`,
      maxAge: false,
      logOnly: true
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot(APPLICATION_EFFECTS),
    EntityDataModule,
    AppDataStoreModule
  ]
})
export class NgrxStoreModule {
  static forRoot(production: boolean): ModuleWithProviders<NgrxStoreModule> {
    return {
      ngModule: NgrxStoreModule,
      providers: [
        {
          provide: DefaultDataServiceConfig,
          useFactory: BuildDefaultDataServiceConfig,
          deps: [API_URL_TOKEN]
        },
        {
          provide: StoreDevtoolsConfig,
          useValue: {
            name: `DOMICILIATION-FACILE`,
            maxAge: production ? 25 : false,
            logOnly: production
          }
        }
      ]
    };
  }
}
