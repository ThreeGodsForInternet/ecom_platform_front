import { Link } from 'react-router-dom';
import { Zap, ChevronRight } from 'lucide-react';

interface FlashSaleProduct {
  id: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  sold: number;
  total: number;
}

export default function FlashSaleSection() {
  const products: FlashSaleProduct[] = [
    {
      id: '1',
      name: '小米14 Ultra 手机',
      originalPrice: 6999,
      salePrice: 5999,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
      sold: 85,
      total: 100,
    },
    {
      id: '2',
      name: 'MacBook Pro 14',
      originalPrice: 14999,
      salePrice: 12999,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400&h=400&fit=crop',
      sold: 60,
      total: 100,
    },
    {
      id: '3',
      name: 'AirPods Pro 2',
      originalPrice: 1899,
      salePrice: 1499,
      image: 'https://images.unsplash.com/photo-1608156639581-9b5e7dfd3028?w=400&h=400&fit=crop',
      sold: 92,
      total: 100,
    },
    {
      id: '4',
      name: 'iPad Air 5',
      originalPrice: 4799,
      salePrice: 3999,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      sold: 75,
      total: 100,
    },
  ];

  return (
    <div className="bg-base-100 rounded-2xl p-4">
      {/* 头部 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap size={24} className="text-primary" />
          <h2 className="text-xl font-bold text-base-content">限时闪购</h2>
          <span className="text-xs text-base-content/60">距结束：02:35:42</span>
        </div>
        <Link to="/flash-sale" className="flex items-center gap-1 text-primary hover:underline">
          查看更多
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* 商品列表 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => {
          const progress = (product.sold / product.total) * 100;
          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-base-50 rounded-xl p-3 hover:shadow-md transition-shadow"
            >
              {/* 商品图片 */}
              <div className="aspect-square bg-base-200 rounded-lg mb-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* 商品名称 */}
              <h3 className="text-sm text-base-content font-medium mb-2 line-clamp-2">
                {product.name}
              </h3>

              {/* 价格 */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-lg font-bold text-primary">¥{product.salePrice}</span>
                <span className="text-xs text-base-content/60 line-through">¥{product.originalPrice}</span>
              </div>

              {/* 进度条 */}
              <div className="space-y-1">
                <div className="h-2 bg-base-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-base-content/60 text-center">
                  已抢{progress}%
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
