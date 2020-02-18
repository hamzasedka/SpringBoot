import { IdentityEntity, DeletedEntity } from '@dom/common/core';
import { PriceCard } from './price-card.model';
import { Contract } from './contract.model';

export interface Order   extends IdentityEntity, DeletedEntity {
  // Order
  uid?: string;
  userId: string;
  orderItems: OrderItem[];
  isPending: boolean;
  deleted?: boolean;
  created_time?: number;
}


export interface OrderItem {
  // Order
  productId: string;
  priceCard?: PriceCard;
  startDate?: Date;
  endDate?: Date;
  deleted?: boolean;
  contract?: Contract;
  created_time?: number;
}
