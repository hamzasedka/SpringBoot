export interface LegalEntity {
  uid?: string;
  name: string;
  lastname: string;
  email: string;
  emailVerified: boolean;
  deleted?: boolean;
  adresseId: string;
  created_time?: number;
  update_time?: number;
}
