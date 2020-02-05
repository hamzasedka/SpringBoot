import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export class StorageDocument  implements IdentityEntity, DeletedEntity{
  uid?: string;
  name: string;
  url: string;
  deleted?: boolean;
  created_time?: number;
}
