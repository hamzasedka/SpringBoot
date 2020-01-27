export interface Promotion {
  uid: string;
  name: string;
  code?: string;
  description: string;
  addressId?: string;
  priceHT: number;
  priceTTC: number;
  strikethroughPrice: number;
  currencySymbol: string;
  canApplyPromotion: boolean;
  relatedProducts?: string[];
  reccurence: 'day' | 'mounth' | 'year';
  deleted?: boolean;
  created_time?: number;
}
