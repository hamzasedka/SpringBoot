export interface PaymentMedhod {
  uid: string;
  subscriptionId: number;
  name: string;
  addressId: string;
  iban: string;
  bic: string;
  deleted?: boolean;
  created_time?: number;
}
