import { IdentityEntity } from './identity-entity';

export interface Company   extends IdentityEntity{
  uid?: string;
  name: string;
  siren: string;
  préfectoralId: string;
  adresseId: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
