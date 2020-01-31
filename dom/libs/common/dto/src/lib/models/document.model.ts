import { IdentityEntity } from './identity-entity';

export interface Document   extends IdentityEntity{
  uid?: string;
  url: string;
  deleted?: boolean;
  created_time?: number;
}
