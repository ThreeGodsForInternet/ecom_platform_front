import { Link } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';

interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  link: string;
}

export default function MoreActivitys() {
  const activities: ActivityItem[] = [
    {
      id: '1',
      title: '拼团购',
      subtitle: '3人成团享优惠',
      color: 'bg-gradient-to-r from-red-400 to-red-600',
      link: '/group-buy',
    },
    {
      id: '2',
      title: '限时秒杀',
      subtitle: '整点开抢',
      color: 'bg-gradient-to-r from-orange-400 to-orange-600',
      link: '/flash-sale',
    },
    {
      id: '3',
      title: '满减活动',
      subtitle: '满300减50',
      color: 'bg-gradient-to-r from-green-400 to-green-600',
      link: '/full-reduction',
    },
    {
      id: '4',
      title: '幸运抽奖',
      subtitle: '每日3次机会',
      color: 'bg-gradient-to-r from-purple-400 to-purple-600',
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
            className="flex flex-col items-center p-4 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className={`w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center mb-3`}>
              <span className="text-white text-2xl">🎉</span>
            </div>
            <span className="text-base font-medium text-base-content mb-1">{activity.title}</span>
            <span className="text-xs text-base-content/60">{activity.subtitle}</span>
          </Link>
        ))}
        {/* 更多活动 */}
        {/* <Link
          to="/activities"
          className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-base-300 hover:border-primary hover:shadow-md transition-all"
        >
          <div className="w-16 h-16 bg-base-200 rounded-2xl flex items-center justify-center mb-3">
            <MoreHorizontal size={32} className="text-base-content/40" />
          </div>
          <span className="text-base font-medium text-base-content mb-1">更多活动</span>
          <span className="text-xs text-base-content/60">查看全部</span>
        </Link> */}
      </div>
    </div>
  );
}
