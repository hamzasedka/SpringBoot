import { IdentityEntity } from './identity-entity';

export interface Bill  extends IdentityEntity{
  uid?: string;
  amount: number;
  currencySymbol: string;
  pdfUrl: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
