import { Link } from 'react-router-dom';

interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  link: string;
}

export default function MoreActivitys() {
  const activities: ActivityItem[] = [
    {
      id: '1',
      title: '拼团购',
      subtitle: '3人成团享优惠',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',
      link: '/group-buy',
    },
    {
      id: '2',
      title: '限时秒杀',
      subtitle: '整点开抢',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c800?w=400&h=300&fit=crop',
      link: '/flash-sale',
    },
    {
      id: '3',
      title: '满减活动',
      subtitle: '满300减50',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
      link: '/full-reduction',
    },
    {
      id: '4',
      title: '幸运抽奖',
      subtitle: '每日3次机会',
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1596394516093-501ba68352ba?w=400&h=300&fit=crop',
      link: '/lucky-draw',
    },
  ];

  return (
    <div className="bg-base-100 rounded-2xl p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {activities.map((activity) => (
          <Link
            key={activity.id}
            to={activity.link}
            className="relative flex flex-col items-center justify-center rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-40 group"
          >
            {/* 背景图片 */}
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${activity.backgroundImageUrl})` }}
            />

            {/* 遮罩层 */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

            {/* 文字内容 */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <span className="text-white text-lg font-bold mb-1">{activity.title}</span>
              <span className="text-white/80 text-xs">{activity.subtitle}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
