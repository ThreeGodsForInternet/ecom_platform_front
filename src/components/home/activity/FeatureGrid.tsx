import { Link } from 'react-router-dom';

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export default function FeatureGrid() {
  const features: FeatureItem[] = [
    {
      id: '1',
      title: '品牌闪购',
      subtitle: '限时特惠',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop',
      link: '/flash-sale',
    },
    {
      id: '2',
      title: '新人专享',
      subtitle: '首单立减',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      link: '/new-user',
    },
    {
      id: '3',
      title: '品牌特卖',
      subtitle: '正品保证',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      link: '/brand-sale',
    },
    {
      id: '4',
      title: '每日优选',
      subtitle: '精选好物',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      link: '/daily-pick',
    },
    {
      id: '5',
      title: '积分商城',
      subtitle: '好礼兑换',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=300&fit=crop',
      link: '/points-mall',
    },
    {
      id: '6',
      title: '会员专享',
      subtitle: '特权福利',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=300&fit=crop',
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
            className="group relative aspect-[4/3] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            {/* 背景图片 */}
            <img
              src={feature.image}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            {/* 渐变遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* 文字内容 - 悬浮在图片上方 */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-3 text-center">
              <span className="text-sm font-bold text-white drop-shadow-md">
                {feature.title}
              </span>
              <span className="text-xs text-white/80 drop-shadow-sm">
                {feature.subtitle}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
