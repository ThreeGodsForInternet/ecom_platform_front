import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockRecommendedProducts = [
  {
    id: '1',
    name: '小米 14 Ultra',
    price: 6499,
    originalPrice: 6999,
    image: '📱',
  },
  {
    id: '2',
    name: 'SK-II神仙水230ml',
    price: 1540,
    originalPrice: 1890,
    image: '💧',
  },
  {
    id: '3',
    name: '三只松鼠每日坚果',
    price: 79.9,
    originalPrice: 99,
    image: '🥜',
  },
  {
    id: '4',
    name: '戴森 吹风机HD15',
    price: 2999,
    originalPrice: 3190,
    image: '💨',
  },
  {
    id: '5',
    name: 'Apple Watch Series',
    price: 2999,
    originalPrice: 3199,
    image: '⌚',
  },
  {
    id: '6',
    name: '华为 Mate60 Pro',
    price: 6999,
    originalPrice: 7499,
    image: '📱',
  },
];

export default function UserRecommendedProducts() {
  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium text-slate-800">为你推荐</h3>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockRecommendedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center text-4xl mb-3 group-hover:shadow-md transition-shadow">
                {product.image}
              </div>
              <h4 className="text-sm text-slate-800 mb-1 line-clamp-2">{product.name}</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-base font-bold text-primary">¥{product.price}</span>
                <span className="text-xs text-slate-400 line-through">¥{product.originalPrice}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 左右箭头（装饰性） */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
