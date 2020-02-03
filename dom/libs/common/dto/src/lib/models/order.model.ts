import { IdentityEntity } from './identity-entity';

export interface Order   extends IdentityEntity {
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
