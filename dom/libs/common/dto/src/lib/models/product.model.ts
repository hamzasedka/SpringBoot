export interface Product {
  uid: string;
  legalEntityId: string;
  name: string;
  description: string;
  addressId?: string;
  priceCardId?: string;
  relatedProducts?: string[];
  isOption?: boolean;
  deleted?: boolean;
  created_time?: number;
}
