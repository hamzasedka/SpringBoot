import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export class Contract  implements IdentityEntity, DeletedEntity {
  uid?: string;
  orderId: number;
  pdfUrl: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
