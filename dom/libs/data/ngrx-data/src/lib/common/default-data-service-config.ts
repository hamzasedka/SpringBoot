import { DefaultDataServiceConfig } from '@ngrx/data';

export function BuildDefaultDataServiceConfig(
  apiUrl: string
): DefaultDataServiceConfig {
  return {
    root: apiUrl,
    entityHttpResourceUrls: {
      address: {
        entityResourceUrl: `${apiUrl}/address/`,
        collectionResourceUrl: `${apiUrl}/address`
      },
      userAccount: {
        entityResourceUrl: `${apiUrl}/userAccount/`,
        collectionResourceUrl: `${apiUrl}/userAccount`
      }
    }
  };
}
