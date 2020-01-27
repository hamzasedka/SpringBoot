export interface DocumentScan {
  uid: string;
  subscriptionId: number;
  pdfUrl: string;
  deleted?: boolean;
  created_time?: number;
}
