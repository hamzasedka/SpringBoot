import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export interface PaymentMedhod   extends IdentityEntity, DeletedEntity{
  uid?: string;
  orderId: number;
  name: string;
  addressId: string;
  iban: string;
  bic: string;
  deleted?: boolean;
  created_time?: number;
}
