export interface Subscription {
  // Order
  uid: string;
  productId: string;
  legalEntityId: string;
  priceCardId: string;
  startDate: Date;
  endDate: Date;
  deleted?: boolean;
  created_time?: number;
}
