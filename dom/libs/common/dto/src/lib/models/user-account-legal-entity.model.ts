import { IdentityEntity } from './identity-entity';

export interface UserAccountLegalEntity extends IdentityEntity{
  uid?: string;
  userId: string;
  companyId: string;
  created_time?: number;
  update_time?: number;
}
