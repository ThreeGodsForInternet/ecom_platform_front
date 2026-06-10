import { Trophy, TrendingUp, Calendar, FileText, Ticket, Award } from 'lucide-react';

export default function UserHeaderCard() {
  return (
    <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
            <Trophy size={20} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-slate-300">当前等级：<span className="text-amber-400 font-medium">铂金会员</span></p>
            <p className="text-xs text-slate-400">再消费 19840 升级为白金会员</p>
          </div>
        </div>
        <button className="text-sm text-white/80 hover:text-white transition-colors">
          查看所有会员权益 →
        </button>
      </div>

      {/* 进度条 */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>铂金会员</span>
          <span>10000 / 30000</span>
          <span>白金会员</span>
        </div>
        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500" style={{ width: '33%' }} />
        </div>
      </div>

      {/* 快捷入口 */}
      <div className="grid grid-cols-6 gap-4">
        {[
          { icon: Trophy, label: '会员专享' },
          { icon: TrendingUp, label: '数据分析' },
          { icon: Calendar, label: '专属活动' },
          { icon: FileText, label: '生日礼券' },
          { icon: Award, label: '会员等级' },
          { icon: Ticket, label: '专属权益' },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Icon size={20} className="text-slate-300" />
              </div>
              <span className="text-xs text-slate-300">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
