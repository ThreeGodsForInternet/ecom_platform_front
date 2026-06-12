import { Search, Filter, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const orderStatuses = ['全部', '待付款', '待发货', '待收货', '已完成', '退款/售后'];

const mockOrders = [
  {
    id: '202406080001',
    status: '已完成',
    date: '2024-06-08',
    items: [
      { name: '小米 14 Ultra', price: 5999, image: '📱' },
    ],
    total: 5999,
  },
  {
    id: '202406070002',
    status: '待发货',
    date: '2024-06-07',
    items: [
      { name: 'SK-II 神仙水', price: 1540, image: '💧' },
      { name: '戴森吹风机', price: 2999, image: '💨' },
    ],
    total: 4539,
  },
  {
    id: '202406060003',
    status: '待付款',
    date: '2024-06-06',
    items: [
      { name: '三只松鼠坚果大礼包', price: 129, image: '🥜' },
    ],
    total: 129,
  },
];

export default function Orders() {
  const [activeTab, setActiveTab] = useState('全部');

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">我的订单</h1>
        <p className="text-slate-500">查看和管理您的订单</p>
      </div>

      {/* 搜索和筛选 */}
      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {orderStatuses.map((status) => (
              <button
                key={status}
                onClick={() => setActiveTab(status)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === status
                    ? 'bg-primary text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="搜索订单号..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
              <Filter size={16} />
              筛选
            </button>
          </div>
        </div>
      </div>

      {/* 订单列表 */}
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* 订单头部 */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-sm text-slate-500">订单号: {order.id}</span>
                <span className="text-sm text-slate-500">{order.date}</span>
              </div>
              <span className="text-sm font-medium text-primary">{order.status}</span>
            </div>

            {/* 商品列表 */}
            <div className="p-6">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-medium">{item.name}</h4>
                      <p className="text-primary font-bold">¥{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 订单底部 */}
            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
              <div className="text-slate-500">
                共 {order.items.length} 件商品，
                <span className="text-slate-800 font-bold ml-1">¥{order.total}</span>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Eye size={16} />
                  查看详情
                </button>
                {order.status === '待付款' && (
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    立即付款
                  </button>
                )}
                {order.status === '待收货' && (
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    确认收货
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 分页 */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button className="p-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <ChevronLeft size={16} />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-lg transition-colors ${
              page === 1 ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="p-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
