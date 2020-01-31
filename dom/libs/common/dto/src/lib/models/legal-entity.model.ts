import { IdentityEntity } from './identity-entity';

export interface LegalEntity   extends IdentityEntity{
  uid?: string;
  name: string;
  siret: string;
  adresseId: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
