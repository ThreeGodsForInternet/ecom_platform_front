import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      image: product.images[0]?.url || '',
      price: product.price,
      originalPrice: product.originalPrice,
      quantity: 1,
      stock: product.stock,
    });
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/products/${product.id}`}
      className="card bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
    >
      {/* 图片区域 */}
      <figure className="relative bg-base-200 aspect-square flex items-center justify-center">
        {product.images[0]?.url ? (
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-5xl text-base-content/15">
            {product.categoryId === 'c1' ? '📱' :
             product.categoryId === 'c2' ? '💻' :
             product.categoryId === 'c3' ? '🏠' :
             product.categoryId === 'c4' ? '👟' :
             product.categoryId === 'c5' ? '🍪' :
             product.categoryId === 'c6' ? '✨' :
             product.categoryId === 'c7' ? '⚽' :
             product.categoryId === 'c8' ? '📖' : '📦'}
          </div>
        )}
        {/* 标签 */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && <span className="badge badge-primary badge-sm">新品</span>}
          {product.isHot && <span className="badge badge-error badge-sm">热卖</span>}
          {discount > 0 && (
            <span className="badge badge-warning badge-sm">-{discount}%</span>
          )}
        </div>
        {/* 悬浮操作 */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToCart}
            className="btn btn-circle btn-primary btn-sm"
            title="加入购物车"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </figure>

      {/* 信息区域 */}
      <div className="card-body p-3 gap-1">
        <h3 className="text-sm font-medium line-clamp-2 leading-tight min-h-[2.5rem]">
          {product.name}
        </h3>
        {product.subtitle && (
          <p className="text-xs text-base-content/40 line-clamp-1">{product.subtitle}</p>
        )}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-lg font-bold text-error">¥{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-base-content/30 line-through">
              ¥{product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-base-content/30 mt-1">
          <span>已售 {product.sales > 10000 ? `${(product.sales / 10000).toFixed(1)}万` : product.sales}</span>
          <span>·</span>
          <span>{product.rating}分</span>
        </div>
      </div>
    </Link>
  );
}
