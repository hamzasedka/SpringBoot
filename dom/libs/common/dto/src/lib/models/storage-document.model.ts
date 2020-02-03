import { IdentityEntity } from './identity-entity';

export interface StorageDocument   extends IdentityEntity{
  uid?: string;
  name: string;
  url: string;
  deleted?: boolean;
  created_time?: number;
}
