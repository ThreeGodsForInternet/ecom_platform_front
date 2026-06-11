import { Ticket, ChevronRight } from 'lucide-react';

const mockCoupons = [
  {
    id: 1,
    value: 100,
    minAmount: 500,
    title: '满500减100',
    description: '全品类通用券',
    expireDate: '2024-07-31',
    status: 'available',
  },
  {
    id: 2,
    value: 50,
    minAmount: 200,
    title: '满200减50',
    description: '手机数码专享',
    expireDate: '2024-06-30',
    status: 'available',
  },
  {
    id: 3,
    value: 200,
    minAmount: 1000,
    title: '满1000减200',
    description: '会员专享券',
    expireDate: '2024-06-15',
    status: 'expired',
  },
];

export default function Coupons() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">优惠券</h1>
        <p className="text-slate-500">查看和使用您的优惠券</p>
      </div>

      {/* 标签页 */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm">可使用</button>
        <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm transition-colors">已使用</button>
        <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm transition-colors">已过期</button>
      </div>

      {/* 优惠券列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockCoupons.map((coupon) => (
          <div
            key={coupon.id}
            className={`bg-white rounded-xl shadow-sm border ${
              coupon.status === 'expired' ? 'border-slate-200 opacity-60' : 'border-primary/20'
            } overflow-hidden`}
          >
            <div className="flex">
              {/* 左侧金额 */}
              <div
                className={`w-28 flex flex-col items-center justify-center text-center p-4 ${
                  coupon.status === 'expired' ? 'bg-slate-100' : 'bg-primary'
                }`}
              >
                <span className={`text-3xl font-bold ${coupon.status === 'expired' ? 'text-slate-400' : 'text-white'}`}>
                  ¥{coupon.value}
                </span>
                <span className={`text-xs ${coupon.status === 'expired' ? 'text-slate-400' : 'text-white/80'}`}>
                  满{coupon.minAmount}可用
                </span>
              </div>

              {/* 右侧内容 */}
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">{coupon.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">{coupon.description}</p>
                  <p className="text-xs text-slate-400">有效期至 {coupon.expireDate}</p>
                </div>
                <div className="flex justify-end mt-3">
                  {coupon.status === 'available' && (
                    <button className="text-primary text-sm hover:text-primary/80 flex items-center gap-1 transition-colors">
                      立即使用
                      <ChevronRight size={14} />
                    </button>
                  )}
                  {coupon.status === 'expired' && (
                    <span className="text-slate-400 text-sm">已过期</span>
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
