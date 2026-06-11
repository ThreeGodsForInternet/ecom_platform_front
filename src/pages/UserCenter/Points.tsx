import { Star, Gift, History, Calendar } from 'lucide-react';

export default function Points() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">我的积分</h1>
        <p className="text-slate-500">查看和使用您的积分</p>
      </div>

      {/* 积分概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-primary to-red-600 rounded-xl p-6 text-white">
          <p className="text-white/80 mb-1">当前积分</p>
          <p className="text-4xl font-bold">3,680</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <p className="text-slate-500 mb-1">累计获得</p>
          <p className="text-3xl font-bold text-slate-800">12,580</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <p className="text-slate-500 mb-1">即将过期</p>
          <p className="text-3xl font-bold text-amber-600">500</p>
        </div>
      </div>

      {/* 快捷操作 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-primary/50 transition-colors flex flex-col items-center gap-2">
          <Gift size={24} className="text-primary" />
          <span className="text-slate-800">积分兑换</span>
        </button>
        <button className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-primary/50 transition-colors flex flex-col items-center gap-2">
          <History size={24} className="text-primary" />
          <span className="text-slate-800">积分明细</span>
        </button>
      </div>

      {/* 积分记录 */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-medium text-slate-800 mb-4">积分明细</h3>
        <div className="space-y-4">
          {[
            { date: '2024-06-08', desc: '购物获得', points: '+599' },
            { date: '2024-06-07', desc: '积分兑换优惠券', points: '-100' },
            { date: '2024-06-05', desc: '签到奖励', points: '+5' },
            { date: '2024-06-01', desc: '购物获得', points: '+299' },
            { date: '2024-05-28', desc: '评价商品', points: '+20' },
          ].map((record, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
            >
              <div>
                <p className="text-slate-800 font-medium">{record.desc}</p>
                <p className="text-slate-400 text-sm">{record.date}</p>
              </div>
              <span
                className={`font-bold ${
                  record.points.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {record.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
