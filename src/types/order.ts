/** 订单商品快照 */
export interface OrderItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

/** 订单状态 */
export type OrderStatus =
  | 'pending_payment'
  | 'pending_delivery'
  | 'delivering'
  | 'completed'
  | 'cancelled'
  | 'refunding';

/** 订单状态映射 */
export const ORDER_STATUS_MAP: Record<OrderStatus, string> = {
  pending_payment: '待付款',
  pending_delivery: '待发货',
  delivering: '配送中',
  completed: '已完成',
  cancelled: '已取消',
  refunding: '退款中',
};

/** 订单 */
export interface Order {
  id: string;
  orderNo: string;
  items: OrderItem[];
  totalAmount: number;
  actualAmount: number;
  status: OrderStatus;
  address: string;
  receiverName: string;
  receiverPhone: string;
  createdAt: string;
  paidAt?: string;
  deliveredAt?: string;
  completedAt?: string;
}
