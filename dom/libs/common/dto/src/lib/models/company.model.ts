import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export interface Company   extends IdentityEntity, DeletedEntity{
  uid?: string;
  name: string;
  juri_forme: string;
  siren: string;
  prefectoralId: string;
  creationInProgress?: boolean;
  isHosting?: boolean;
  isHostedBy?: string;
  adressId: string;
  companyDocIds: string[];
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
