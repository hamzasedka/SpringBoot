import { DefaultDataServiceConfig } from '@ngrx/data';

export function BuildDefaultDataServiceConfig(
  authServiceUrl: string
): DefaultDataServiceConfig {
  return {
    root: authServiceUrl,
    entityHttpResourceUrls: {
      address: {
        entityResourceUrl: `${authServiceUrl}/address/`,
        collectionResourceUrl: `${authServiceUrl}/address`
      },
      userAccount: {
        entityResourceUrl: `${authServiceUrl}/userAccount/`,
        collectionResourceUrl: `${authServiceUrl}/userAccount`
      },
      product: {
        entityResourceUrl: `${authServiceUrl}/product/`,
        collectionResourceUrl: `${authServiceUrl}/product`
      }
    }
  };
}
