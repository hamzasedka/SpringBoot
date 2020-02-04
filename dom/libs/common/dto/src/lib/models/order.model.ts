import { IdentityEntity, DeletedEntity } from '@dom/common/core';

export interface Order   extends IdentityEntity, DeletedEntity {
  // Order
  uid: string;
  orderItems: OrderItem[];
  companyId: string;
  startDate: Date;
  endDate?: Date;
  deleted?: boolean;
  created_time?: number;
}


export interface OrderItem   extends IdentityEntity {
  // Order
  uid: string;
  productId: string;
  priceCardId: string;
  deleted?: boolean;
  created_time?: number;
}
