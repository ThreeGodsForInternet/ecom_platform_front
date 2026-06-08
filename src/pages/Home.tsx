import { Link } from 'react-router-dom';
import { ChevronRight, Flame, Sparkles, TrendingUp } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import { mockBanners } from '../data/mockBanners';
import CategoryNav from '../components/home/CategoryNav';
import ProductCard from '../components/product/ProductCard';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % mockBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const newProducts = mockProducts.filter((p) => p.isNew).slice(0, 4);
  const hotProducts = mockProducts.filter((p) => p.isHot).slice(0, 8);
  const recommendedProducts = mockProducts.slice(0, 6);

  return (
    <div>
      <button className="btn ">Button</button>
      {/* 轮播横幅 */}
      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="carousel w-full rounded-2xl overflow-hidden h-48 sm:h-64 md:h-80">
            {mockBanners.map((banner, index) => (
              <div
                key={banner.id}
                className={`carousel-item relative w-full bg-gradient-to-r ${banner.bgColor}`}
                style={{ display: index === currentBanner ? 'block' : 'none' }}
              >
                <div className="flex flex-col items-center justify-center w-full h-full text-white px-8 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-sm sm:text-base opacity-90 mb-4">{banner.subtitle}</p>
                  <Link to={banner.link} className="btn btn-sm md:btn-md glass text-white">
                    立即抢购
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* 轮播指示器 */}
          <div className="flex justify-center gap-2 mt-3">
            {mockBanners.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentBanner ? 'bg-primary w-5' : 'bg-base-300'
                }`}
                onClick={() => setCurrentBanner(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* 分类导航 */}
        <section>
          <CategoryNav />
        </section>

        {/* 新品首发 */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-primary" />
              <h2 className="text-lg font-bold">新品首发</h2>
            </div>
            <Link to="/products?tag=新品" className="btn btn-ghost btn-xs gap-1">
              查看更多 <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 热卖爆款 */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Flame size={20} className="text-error" />
              <h2 className="text-lg font-bold">热卖爆款</h2>
            </div>
            <Link to="/products?tag=热卖" className="btn btn-ghost btn-xs gap-1">
              查看更多 <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {hotProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 为你推荐 */}
        <section className="mt-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-info" />
              <h2 className="text-lg font-bold">为你推荐</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
