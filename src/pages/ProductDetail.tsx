import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
} from 'lucide-react';
import { mockProducts } from '../mockdata/mockProducts';
import { useCartStore } from '../stores/cartStore';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'detail' | 'specs' | 'reviews'>('detail');

  const product = mockProducts.find((p) => p.id === id);
  const relatedProducts = mockProducts
    .filter((p) => p.categoryId === product?.categoryId && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">商品不存在</h2>
        <p className="text-base-content/50 mb-4">该商品可能已下架或链接错误</p>
        <Link to="/products" className="btn btn-primary">
          浏览其他商品
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      image: product.images[0]?.url || '',
      price: product.price,
      originalPrice: product.originalPrice,
      quantity,
      stock: product.stock,
      specs: product.specs.map((s) => s.value).join(' / '),
    });
    // 显示 Toast 提示（简单用 daisyUI 的 alert）
    const toast = document.createElement('div');
    toast.className = 'toast toast-top toast-end z-50';
    toast.innerHTML = `
      <div class="alert alert-success shadow-lg">
        <span>✅ 已加入购物车</span>
      </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* 面包屑 */}
      <div className="text-sm text-base-content/50 mb-4 flex items-center gap-1">
        <Link to="/" className="hover:text-primary">
          首页
        </Link>
        <ChevronRight size={14} />
        <Link to="/products" className="hover:text-primary">
          商品列表
        </Link>
        <ChevronRight size={14} />
        <span className="text-base-content">{product.name}</span>
      </div>

      {/* 商品主区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-100 rounded-box p-4 md:p-6">
        {/* 左侧：商品图片 */}
        <div className="aspect-square bg-base-200 rounded-xl flex items-center justify-center text-8xl text-base-content/15">
          {product.categoryId === 'c1'
            ? '📱'
            : product.categoryId === 'c2'
              ? '💻'
              : product.categoryId === 'c3'
                ? '🏠'
                : product.categoryId === 'c4'
                  ? '👟'
                  : product.categoryId === 'c5'
                    ? '🍪'
                    : product.categoryId === 'c6'
                      ? '✨'
                      : product.categoryId === 'c7'
                        ? '⚽'
                        : product.categoryId === 'c8'
                          ? '📖'
                          : '📦'}
        </div>

        {/* 右侧：商品信息 */}
        <div className="flex flex-col gap-3">
          {/* 标签 */}
          <div className="flex gap-1">
            {product.isNew && <span className="badge badge-primary badge-sm">新品</span>}
            {product.isHot && <span className="badge badge-error badge-sm">热卖</span>}
            {discount > 0 && <span className="badge badge-warning badge-sm">-{discount}%</span>}
            {product.tags.map((t) => (
              <span key={t} className="badge badge-outline badge-sm">
                {t}
              </span>
            ))}
          </div>

          {/* 名称 */}
          <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
          {product.subtitle && <p className="text-sm text-base-content/50">{product.subtitle}</p>}

          {/* 价格 */}
          <div className="flex items-baseline gap-3 p-3 bg-error/5 rounded-lg">
            <span className="text-3xl font-bold text-error">¥{product.price}</span>
            {product.originalPrice && (
              <span className="text-base text-base-content/30 line-through">
                ¥{product.originalPrice}
              </span>
            )}
            {discount > 0 && (
              <span className="text-sm text-error">
                省¥{product.originalPrice! - product.price}
              </span>
            )}
          </div>

          {/* 销量 & 评分 */}
          <div className="flex items-center gap-4 text-sm text-base-content/50">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-warning fill-warning" />
              <span>{product.rating}</span>
              <span>({product.reviewCount}评价)</span>
            </div>
            <span>
              已售{' '}
              {product.sales > 10000 ? `${(product.sales / 10000).toFixed(1)}万` : product.sales}
            </span>
          </div>

          <div className="divider my-0" />

          {/* 规格 */}
          <div>
            <h3 className="text-sm font-medium mb-2">规格参数</h3>
            <div className="flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <div key={spec.name} className="text-xs bg-base-200 rounded-md px-2 py-1">
                  <span className="text-base-content/50">{spec.name}: </span>
                  <span>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 数量 & 操作 */}
          <div className="flex items-center gap-3 mt-2">
            <div className="join">
              <button
                className="btn btn-sm join-item"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="btn btn-sm join-item no-animation pointer-events-none min-w-[3rem]">
                {quantity}
              </span>
              <button
                className="btn btn-sm join-item"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                +
              </button>
            </div>
            <span className="text-xs text-base-content/30">库存 {product.stock}件</span>
          </div>

          <div className="flex gap-2 mt-2">
            <button className="btn btn-primary flex-1 gap-2" onClick={handleAddToCart}>
              <ShoppingCart size={18} /> 加入购物车
            </button>
            {/* <button className="btn btn-outline btn-square">
              <Heart size={18} />
            </button> */}
            <button className="btn btn-outline btn-square">
              <Share2 size={18} />
            </button>
          </div>

          {/* 服务承诺 */}
          <div className="flex flex-wrap gap-4 text-xs text-base-content/40 mt-2">
            <span className="flex items-center gap-1">
              <Truck size={14} /> 全国包邮
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} /> 正品保障
            </span>
            <span className="flex items-center gap-1">
              <RotateCcw size={14} /> 7天退换
            </span>
          </div>
        </div>
      </div>

      {/* 详情 Tabs */}
      <div className="mt-6 bg-base-100 rounded-box">
        <div className="tabs tabs-bordered px-4">
          {(['detail', 'specs', 'reviews'] as const).map((tab) => (
            <button
              key={tab}
              className={`tab tab-lg ${activeTab === tab ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'detail'
                ? '商品详情'
                : tab === 'specs'
                  ? '规格参数'
                  : `商品评价(${product.reviewCount})`}
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[200px]">
          {activeTab === 'detail' && (
            <div className="prose max-w-none">
              <p className="text-base-content/70 leading-relaxed">{product.description}</p>
              <p className="mt-4 text-base-content/30 text-sm">
                商品详情页内容由商家提供，更多图文详情和售后政策请以实际商品为准。
              </p>
            </div>
          )}
          {activeTab === 'specs' && (
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.name}>
                      <td className="text-base-content/50 w-32">{spec.name}</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold">{product.rating}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={16}
                      className={
                        s <= Math.round(product.rating)
                          ? 'text-warning fill-warning'
                          : 'text-base-300'
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-base-content/50">({product.reviewCount}条评价)</span>
              </div>
              <div className="bg-base-200 rounded-lg p-4 text-center text-base-content/40">
                评价内容由用户发布，查看更多评价请滑动浏览
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 相关推荐 */}
      {relatedProducts.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4">相关推荐</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
