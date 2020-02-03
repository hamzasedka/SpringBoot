import { IdentityEntity } from './identity-entity';
import { PriceCard } from './price-card.model';

export interface Product  extends IdentityEntity{
  uid?: string;
  companyId: string;
  name: string;
  description: string;
  addressId?: string;
  priceCards?: PriceCard[];
  relatedProducts?: string[];
  isOption?: boolean;
  deleted?: boolean;
  created_time?: number;
}
