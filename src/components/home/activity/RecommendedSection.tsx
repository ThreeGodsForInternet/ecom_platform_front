import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';

interface RecommendedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  sales: number;
}

export default function RecommendedSection() {
  const products: RecommendedProduct[] = [
    {
      id: '1',
      name: '索尼 WH-1000XM5 无线降噪耳机',
      price: 2499,
      originalPrice: 2999,
      image: '🎧',
      rating: 4.9,
      reviews: 2856,
      sales: 15890,
    },
    {
      id: '2',
      name: '戴森 V15 Detect 无线吸尘器',
      price: 4999,
      originalPrice: 5999,
      image: '🌀',
      rating: 4.8,
      reviews: 1523,
      sales: 8965,
    },
    {
      id: '3',
      name: '任天堂 Switch OLED 游戏机',
      price: 2599,
      originalPrice: 2799,
      image: '🎮',
      rating: 4.9,
      reviews: 5236,
      sales: 32568,
    },
    {
      id: '4',
      name: 'SK-II 神仙水精华液 230ml',
      price: 1590,
      originalPrice: 1890,
      image: '💧',
      rating: 4.7,
      reviews: 8569,
      sales: 56234,
    },
  ];

  return (
    <div className="bg-base-100 rounded-2xl p-4">
      {/* 头部 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Star size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-base-content">为你推荐</h2>
        </div>
        <Link to="/recommended" className="flex items-center gap-1 text-primary hover:underline">
          查看更多
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* 商品列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-base-50 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            {/* 商品图片 */}
            <div className="aspect-square bg-base-200 rounded-lg flex items-center justify-center text-5xl mb-3">
              {product.image}
            </div>

            {/* 商品名称 */}
            <h3 className="text-sm text-base-content font-medium mb-2 line-clamp-2">
              {product.name}
            </h3>

            {/* 评分 */}
            <div className="flex items-center gap-1 mb-2">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xs text-base-content/80">{product.rating}</span>
              <span className="text-xs text-base-content/60">({product.reviews}条评价)</span>
            </div>

            {/* 销量 */}
            <p className="text-xs text-base-content/60 mb-2">已售 {product.sales}件</p>

            {/* 价格 */}
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-primary">¥{product.price}</span>
              <span className="text-xs text-base-content/60 line-through">¥{product.originalPrice}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
