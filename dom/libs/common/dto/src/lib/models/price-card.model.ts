import { IdentityEntity, DeletedEntity } from '@dom/common/core';
import { Reccurences } from '../enums';

export interface PriceCard extends IdentityEntity, DeletedEntity {
  uid?: string;
  name?: string;
  priceExcludeTaxe?: number;
  priceIncludeTaxe?: number;
  strikethroughPrice?: number;
  currencySymbol?: string;
  canApplyPromotion?: boolean;
  contractCommitment?: number;
  contractCommitmentUnit?: Reccurences;
  deleted?: boolean;
  created_time?: number;
}
