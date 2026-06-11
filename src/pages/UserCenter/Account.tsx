import { Wallet, CreditCard, TrendingUp, Lock } from 'lucide-react';

export default function Account() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">账户中心</h1>
        <p className="text-slate-500">管理您的账户</p>
      </div>

      {/* 账户概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-3">
            <Wallet size={24} className="text-primary" />
            <span className="text-slate-500">账户余额</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">¥2,450.60</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-3">
            <CreditCard size={24} className="text-primary" />
            <span className="text-slate-500">累计消费</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">¥15,820.00</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp size={24} className="text-primary" />
            <span className="text-slate-500">账户等级</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">铂金会员</p>
        </div>
      </div>

      {/* 快捷操作 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Wallet, title: '充值', desc: '账户充值' },
          { icon: CreditCard, title: '提现', desc: '余额提现' },
          { icon: Lock, title: '安全', desc: '账户安全' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-primary/50 transition-colors text-center cursor-pointer"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <item.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-slate-800 font-medium mb-1">{item.title}</h3>
            <p className="text-slate-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
