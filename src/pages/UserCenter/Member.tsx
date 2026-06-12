import { Crown, Gift, Calendar, Star } from 'lucide-react';

export default function Member() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">会员等级</h1>
        <p className="text-slate-500">查看您的会员权益和成长</p>
      </div>

      {/* 当前会员信息 */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6 border border-amber-200">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center">
            <Crown size={40} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-1">铂金会员</h3>
            <p className="text-amber-600 mb-2">成长值: 10,000 / 30,000</p>
            <div className="w-64 h-2 bg-amber-200 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '33%' }} />
            </div>
            <p className="text-sm text-amber-600 mt-2">再获得 20,000 成长值即可升级为钻石会员</p>
          </div>
        </div>
      </div>

      {/* 会员特权 */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-medium text-slate-800 mb-4 flex items-center gap-2">
          <Gift size={20} className="text-primary" />
          会员特权
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: '专属折扣', desc: '会员专享价格' },
            { title: '积分倍数', desc: '购物多倍积分' },
            { title: '专属客服', desc: '一对一服务' },
            { title: '生日礼包', desc: '生日专属福利' },
          ].map((benefit, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Gift size={24} className="text-primary" />
              </div>
              <h4 className="font-medium text-slate-800 mb-1">{benefit.title}</h4>
              <p className="text-sm text-slate-500">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 成长记录 */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-medium text-slate-800 mb-4 flex items-center gap-2">
          <Calendar size={20} className="text-primary" />
          成长记录
        </h3>
        <div className="space-y-4">
          {[
            { date: '2024-06-08', desc: '购买小米14 Ultra', points: '+599' },
            { date: '2024-06-05', desc: '签到奖励', points: '+5' },
            { date: '2024-06-01', desc: '购买戴森吹风机', points: '+299' },
          ].map((record, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
              <div className="flex items-center gap-3">
                <Star size={16} className="text-amber-500" />
                <span className="text-slate-800">{record.desc}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-600 font-medium">{record.points}</span>
                <span className="text-slate-400 text-sm">{record.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
