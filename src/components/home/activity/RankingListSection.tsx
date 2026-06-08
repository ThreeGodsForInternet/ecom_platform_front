import { Link } from 'react-router-dom';
import { Trophy, ChevronRight } from 'lucide-react';

interface RankingItem {
  id: string;
  rank: number;
  name: string;
  price: number;
  image: string;
}

export default function RankingListSection() {
  const rankings: RankingItem[] = [
    {
      id: '1',
      rank: 1,
      name: 'iPhone 15 Pro Max',
      price: 9999,
      image: '📱',
    },
    {
      id: '2',
      rank: 2,
      name: 'MacBook Air M3',
      price: 8999,
      image: '💻',
    },
    {
      id: '3',
      rank: 3,
      name: 'AirPods Pro 2',
      price: 1899,
      image: '🎧',
    },
    {
      id: '4',
      rank: 4,
      name: 'iPad Pro 12.9',
      price: 8999,
      image: '📱',
    },
    {
      id: '5',
      rank: 5,
      name: 'Apple Watch Ultra',
      price: 6499,
      image: '🧭',
    },
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-500';
      case 2:
        return 'text-gray-400';
      case 3:
        return 'text-amber-600';
      default:
        return 'text-base-content/60';
    }
  };

  return (
    <div className="bg-base-100 rounded-2xl p-4">
      {/* 头部 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-base-content">热销榜单</h2>
        </div>
        <Link to="/ranking" className="flex items-center gap-1 text-primary hover:underline">
          查看更多
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* 榜单列表 */}
      <div className="space-y-3">
        {rankings.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-base-200 transition-colors"
          >
            {/* 排名 */}
            <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
              {item.rank <= 3 ? (
                <Trophy size={24} className={getRankColor(item.rank)} />
              ) : (
                <span className={getRankColor(item.rank)}>{item.rank}</span>
              )}
            </div>

            {/* 商品图片 */}
            <div className="w-16 h-16 bg-base-200 rounded-lg flex items-center justify-center text-2xl">
              {item.image}
            </div>

            {/* 商品信息 */}
            <div className="flex-1">
              <h3 className="text-base font-medium text-base-content mb-1">{item.name}</h3>
              <p className="text-lg font-bold text-primary">¥{item.price}</p>
            </div>

            {/* 箭头 */}
            <ChevronRight size={20} className="text-base-content/40" />
          </Link>
        ))}
      </div>
    </div>
  );
}
