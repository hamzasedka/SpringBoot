import { IdentityEntity } from './identity-entity';

export class StorageDocument  implements IdentityEntity{
  uid?: string;
  name: string;
  url: string;
  deleted?: boolean;
  created_time?: number;
}
