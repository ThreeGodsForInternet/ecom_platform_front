import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const mockRecentProducts = [
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
];

export default function UserRecentBrowsing() {
  return (
    <div className="bg-white rounded-xl p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium text-slate-800">最近浏览</h3>
        <Link to="/user/browsing" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
          查看更多 <ChevronRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {mockRecentProducts.map((product) => (
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
    </div>
  );
}
