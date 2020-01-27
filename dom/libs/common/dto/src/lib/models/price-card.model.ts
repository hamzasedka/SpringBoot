export interface PriceCard {
  uid: string;
  name: string;
  promotionId?: string;
  price: number;
  priceIncludeTaxe: number;
  strikethroughPrice?: number;
  currencySymbol: string;
  canApplyPromotion: boolean;
  reccurence: 'day' | 'mounth' | 'year';
  contractCommitment: number;
  contractCommitmentUnit: 'day' | 'mounth' | 'year';
  deleted?: boolean;
  created_time?: number;
}
