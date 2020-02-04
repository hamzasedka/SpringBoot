import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export interface Bill  extends IdentityEntity, DeletedEntity{
  uid?: string;
  amount: number;
  currencySymbol: string;
  pdfUrl: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
