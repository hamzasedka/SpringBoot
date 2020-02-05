import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export interface UserAccountLegalEntity extends IdentityEntity , DeletedEntity{
  uid?: string;
  userId: string;
  companyId: string;
  created_time?: number;
  update_time?: number;
}
