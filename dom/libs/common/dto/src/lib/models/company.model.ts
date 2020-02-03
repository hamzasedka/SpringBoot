import { IdentityEntity } from './identity-entity';

export interface Company   extends IdentityEntity{
  uid?: string;
  name: string;
  siren: string;
  prefectoralId: string;
  isHosting?: boolean;
  isHostedBy?: string;
  adresseId: string;
  kbisDocIds: string[];
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
