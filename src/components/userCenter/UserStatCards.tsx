import { Wallet, Ticket, Gift, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserStatCards() {
  const stats = [
    {
      icon: Wallet,
      title: '账户资产',
      value: '¥2450.60',
      subLabel: '充值',
      link: '/user/account',
    },
    {
      icon: Star,
      title: '可用积分',
      value: '3680',
      subLabel: '积分抽奖',
      link: '/user/points',
    },
    {
      icon: Ticket,
      title: '优惠券',
      value: '5 张',
      subLabel: '会员优惠券',
      link: '/user/coupons',
    },
    {
      icon: Gift,
      title: '礼品卡',
      value: '2 张',
      subLabel: '',
      link: '/user/gifts',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Link
            key={index}
            to={stat.link}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
                </div>
              </div>
            </div>
            {stat.subLabel && (
              <button className="text-xs text-primary hover:text-primary/80 transition-colors">
                {stat.subLabel} →
              </button>
            )}
          </Link>
        );
      })}
    </div>
  );
}
