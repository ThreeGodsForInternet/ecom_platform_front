import { Link } from 'react-router-dom';

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  link: string;
}

export default function FeatureGrid() {
  const features: FeatureItem[] = [
    {
      id: '1',
      title: '品牌闪购',
      subtitle: '限时特惠',
      color: 'bg-gradient-to-r from-red-500 to-orange-500',
      link: '/flash-sale',
    },
    {
      id: '2',
      title: '新人专享',
      subtitle: '首单立减',
      color: 'bg-gradient-to-r from-pink-500 to-rose-500',
      link: '/new-user',
    },
    {
      id: '3',
      title: '品牌特卖',
      subtitle: '正品保证',
      color: 'bg-gradient-to-r from-purple-500 to-indigo-500',
      link: '/brand-sale',
    },
    {
      id: '4',
      title: '每日优选',
      subtitle: '精选好物',
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      link: '/daily-pick',
    },
    {
      id: '5',
      title: '积分商城',
      subtitle: '好礼兑换',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      link: '/points-mall',
    },
    {
      id: '6',
      title: '会员专享',
      subtitle: '特权福利',
      color: 'bg-gradient-to-r from-yellow-500 to-amber-500',
      link: '/vip-exclusive',
    },
  ];

  return (
    <div className="bg-base-100 rounded-2xl p-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {features.map((feature) => (
          <Link
            key={feature.id}
            to={feature.link}
            className="flex  items-center p-4 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-2`}>
              <span className="text-white text-lg">🔥</span>
            </div>
            <span className="text-sm font-medium text-base-content">{feature.title}</span>
            <span className="text-xs text-base-content/60">{feature.subtitle}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
