import { IdentityEntity } from './identity-entity';

export interface DocumentScan   extends IdentityEntity{
  uid?: string;
  subscriptionId: number;
  pdfUrl: string;
  deleted?: boolean;
  created_time?: number;
}
