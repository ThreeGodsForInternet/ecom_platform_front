import { Link } from 'react-router-dom';
import { ChevronRight, Flame, Sparkles, TrendingUp } from 'lucide-react';
import { mockProducts } from '../mockdata/mockProducts';
import CategoryMenu from '../components/home/container/CategoryMenu';
import ProductCard from '../components/product/ProductCard';
import Container from '../components/home/Container';
import Activitys from '../components/home/Activitys';
import SearchComponent from '../components/home/Search';
export default function Home() {
  const newProducts = mockProducts.filter((p) => p.isNew).slice(0, 4);
  const hotProducts = mockProducts.filter((p) => p.isHot).slice(0, 8);
  const recommendedProducts = mockProducts.slice(0, 6);

  return (
    <div>
      <SearchComponent />
      <Container></Container>
      <div className="max-w-7xl mx-auto px-4">
        <Activitys></Activitys>
      </div>

      {/* 
 新品首发 
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

   热卖爆款 
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

 为你推荐 
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
  */}
    </div>
  );
}
