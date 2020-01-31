import { IdentityEntity } from './identity-entity';

export interface PaymentMedhod   extends IdentityEntity{
  uid?: string;
  subscriptionId: number;
  name: string;
  addressId: string;
  iban: string;
  bic: string;
  deleted?: boolean;
  created_time?: number;
}
