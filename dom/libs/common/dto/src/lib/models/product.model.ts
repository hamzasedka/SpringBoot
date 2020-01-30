export interface Product {
  uid: string;
  legalEntityId: string;
  name: string;
  description: string;
  addressId?: string;
  relatedProducts?: string[];
  isOption?: boolean;

  // price Card
  priceExcludeTaxe: number;
  priceIncludeTaxe: number;
  strikethroughPrice?: number;
  currencySymbol: string;
  canApplyPromotion: boolean;
  reccurence: 'day' | 'mounth' | 'year';
  contractCommitment: number;
  contractCommitmentUnit: 'day' | 'mounth' | 'year';
  //-----

  deleted?: boolean;
  created_time?: number;
}
