import { Order } from '@dom/common/dto';

export interface EditOrderState extends Order {
  startedAt: number;
}


export const EDIT_ORDER_INITIAL_STATE: EditOrderState = {
  startedAt: Date.now(),
  userId : '',
  orderItems: [],
  isPending: true
};
