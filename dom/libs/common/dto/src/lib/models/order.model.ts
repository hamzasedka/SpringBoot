import { IdentityEntity } from './identity-entity';

export interface Order   extends IdentityEntity {
  // Order
  uid: string;
  productId: string;
  legalEntityId: string;
  priceCardId: string;
  startDate: Date;
  endDate: Date;
  deleted?: boolean;
  created_time?: number;
}
