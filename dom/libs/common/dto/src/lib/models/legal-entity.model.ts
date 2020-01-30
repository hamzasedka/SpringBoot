export interface LegalEntity {
  uid?: string;
  name: string;
  siret: string;
  adresseId: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
