import { Link } from 'react-router-dom';
import { ChevronRight, Package, XCircle } from 'lucide-react';
import { ORDER_STATUS_MAP, type Order, type OrderStatus } from '../types/order';
import EmptyState from '../components/common/EmptyState';

/** 模拟订单数据 */
const MOCK_ORDERS: Order[] = [
  {
    id: 'o1',
    orderNo: '20260602123456001',
    items: [
      { productId: 'p1', name: 'Apple iPhone 16 Pro Max', image: '', price: 9999, quantity: 1 },
      { productId: 'p6', name: '三只松鼠 坚果大礼包', image: '', price: 138, quantity: 2 },
    ],
    totalAmount: 10275,
    actualAmount: 9999,
    status: 'delivering',
    address: '北京市朝阳区某某街道100号',
    receiverName: '张三',
    receiverPhone: '138****8888',
    createdAt: '2026-06-02 10:30',
    paidAt: '2026-06-02 10:31',
  },
  {
    id: 'o2',
    orderNo: '20260601120045002',
    items: [
      { productId: 'p4', name: '小米电视 S Pro 85英寸', image: '', price: 5999, quantity: 1 },
    ],
    totalAmount: 5999,
    actualAmount: 5999,
    status: 'completed',
    address: '北京市朝阳区某某街道100号',
    receiverName: '张三',
    receiverPhone: '138****8888',
    createdAt: '2026-06-01 15:20',
    completedAt: '2026-06-03 09:00',
  },
  {
    id: 'o3',
    orderNo: '20260530180012003',
    items: [
      { productId: 'p5', name: 'Nike Air Jordan 1 Retro High OG', image: '', price: 1299, quantity: 1 },
    ],
    totalAmount: 1299,
    actualAmount: 1299,
    status: 'cancelled',
    address: '北京市朝阳区某某街道100号',
    receiverName: '张三',
    receiverPhone: '138****8888',
    createdAt: '2026-05-30 18:30',
  },
];

const STATUS_BADGE: Record<OrderStatus, string> = {
  pending_payment: 'badge-warning',
  pending_delivery: 'badge-info',
  delivering: 'badge-primary',
  completed: 'badge-success',
  cancelled: 'badge-ghost',
  refunding: 'badge-warning',
};

export default function Order() {
  const orders = MOCK_ORDERS;

  if (orders.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4">
        <EmptyState
          icon="📋"
          title="暂无订单"
          description="快去挑选心仪的商品下单吧"
          actionText="去购物"
          actionLink="/products"
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* 面包屑 */}
      <div className="text-sm text-base-content/50 mb-4 flex items-center gap-1">
        <Link to="/" className="hover:text-primary">首页</Link>
        <ChevronRight size={14} />
        <span className="text-base-content">我的订单</span>
      </div>

      <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Package size={24} /> 我的订单
      </h1>

      {/* 订单 Tab 筛选 */}
      <div className="tabs tabs-bordered mb-4">
        {['全部', '待付款', '待发货', '配送中', '已完成', '已取消'].map((tab) => (
          <button key={tab} className={`tab tab-sm ${tab === '全部' ? 'tab-active' : ''}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* 订单列表 */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-base-100 rounded-box overflow-hidden">
            {/* 订单头部 */}
            <div className="flex items-center justify-between p-3 border-b border-base-200 bg-base-200/50">
              <div className="text-xs text-base-content/50">
                订单号: {order.orderNo}
                <span className="ml-3">{order.createdAt}</span>
              </div>
              <span className={`badge badge-xs ${STATUS_BADGE[order.status]}`}>
                {ORDER_STATUS_MAP[order.status]}
              </span>
            </div>

            {/* 订单商品 */}
            <div className="p-3 space-y-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-base-200 flex items-center justify-center flex-shrink-0 text-2xl">
                    📦
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium line-clamp-1">{item.name}</h4>
                    <div className="text-xs text-base-content/50 mt-0.5">×{item.quantity}</div>
                  </div>
                  <span className="text-sm font-semibold">¥{item.price}</span>
                </div>
              ))}
            </div>

            {/* 订单底部 */}
            <div className="flex items-center justify-between p-3 border-t border-base-200">
              <span className="text-sm text-base-content/50">
                共 {order.items.reduce((s, i) => s + i.quantity, 0)} 件商品
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-base-content/50">
                  实付:{' '}
                  <span className="text-base font-bold text-error">
                    ¥{order.actualAmount}
                  </span>
                </span>
                <div className="flex gap-1">
                  {order.status === 'pending_payment' && (
                    <button className="btn btn-primary btn-xs">立即付款</button>
                  )}
                  {(order.status === 'delivering' || order.status === 'pending_delivery') && (
                    <button className="btn btn-outline btn-xs">查看物流</button>
                  )}
                  {order.status === 'completed' && (
                    <button className="btn btn-outline btn-xs">再次购买</button>
                  )}
                  {order.status === 'cancelled' && (
                    <button className="btn btn-ghost btn-xs gap-1 text-base-content/30">
                      <XCircle size={12} /> 已取消
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
