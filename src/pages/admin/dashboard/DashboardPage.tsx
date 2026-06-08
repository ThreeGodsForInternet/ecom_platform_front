import PageContainer from '../../../components/admin/PageContainer';
import StatCard from '../../../components/admin/StatCard';
import EmptyState from '../../../components/admin/EmptyState';
import { TrendingUp, ShoppingCart, Package, Users } from 'lucide-react';
import { mockDashboardStats, mockOrders } from '../../../mock/admin';
import type { Order } from '../../../types/admin';

// 销售图表占位组件
function SalesChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-80">
      <h3 className="text-lg font-bold text-slate-800 mb-4">销售趋势</h3>
      <div className="flex items-center justify-center h-full text-slate-400">
        <EmptyState message="图表组件占位" />
      </div>
    </div>
  );
}

// 订单状态Badge
function OrderStatusBadge({ status }: { status: Order['status'] }) {
  const statusMap: Record<Order['status'], { label: string; class: string }> = {
    pending: { label: '待支付', class: 'badge-warning' },
    paid: { label: '已支付', class: 'badge-info' },
    shipped: { label: '已发货', class: 'badge-primary' },
    completed: { label: '已完成', class: 'badge-success' },
    cancelled: { label: '已取消', class: 'badge-error' },
  };

  const { label, class: className } = statusMap[status] || statusMap.pending;
  return <span className={`badge ${className}`}>{label}</span>;
}

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* KPI 卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="今日销售额"
          value={`¥${mockDashboardStats.todaySales.toLocaleString()}`}
          icon={<TrendingUp size={24} />}
          trend={12.5}
        />
        <StatCard
          title="今日订单数"
          value={mockDashboardStats.todayOrders}
          icon={<ShoppingCart size={24} />}
          trend={8.2}
        />
        <StatCard
          title="商品总数"
          value={mockDashboardStats.totalProducts}
          icon={<Package size={24} />}
          trend={3.1}
        />
        <StatCard
          title="用户总数"
          value={mockDashboardStats.totalUsers}
          icon={<Users size={24} />}
          trend={5.8}
        />
      </div>

      {/* 下方区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 销售趋势 */}
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        {/* 最新订单 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">最新订单</h3>
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-800">{order.orderNo}</p>
                  <p className="text-xs text-slate-500">{order.user} · {order.createdAt}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">¥{order.amount}</p>
                  <OrderStatusBadge status={order.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
