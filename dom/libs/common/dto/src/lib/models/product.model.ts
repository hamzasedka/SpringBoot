export interface Product {
  uid: string;
  name: string;
  description: string;
  addressId?: string;
  priceCardId?: string;
  relatedProducts?: string[];
  deleted?: boolean;
  created_time?: number;
}
