export interface Address {
  uid: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  locality: string;
  country: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
