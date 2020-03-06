import { Order, OrderItem } from '@dom/common/dto';

export interface EditOrderState extends Order {
  startedAt: number;
  hostingItem: OrderItem;
}


export const EDIT_ORDER_INITIAL_STATE: EditOrderState = {
  startedAt: Date.now(),
  userId : '',
  orderItems: [],
  isPending: true,
  hostingItem: null
};
