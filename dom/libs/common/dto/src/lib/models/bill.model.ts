export interface Bill {
  uid: string;
  amount: number;
  currencySymbol: string;
  pdfUrl: string;
  deleted?: boolean;
  created_time?: number;
  update_time?: number;
}
