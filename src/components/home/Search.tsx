import { useState, type FormEvent } from 'react';
import { Search, ShoppingCart, User, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCartStore } from '../../stores/cartStore';

export default function SearchComponent() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const totalCount = useCartStore((s) => s.totalCount);

  const hotKeywords = ['手机', '电脑', '家电', '大米', '维格', '牛奶'];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };

  const handleHotKeywordClick = (kw: string) => {
    setKeyword(kw);
    navigate(`/products?keyword=${encodeURIComponent(kw)}`);
  };

  return (
    <div className="bg-base-100 py-4 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-8">
          {/* 左侧：Logo 区域 */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <X size={28} className="text-white font-bold" />
                </div>
                <div className="ml-2">
                  <div className="text-2xl font-bold text-primary">米米乐</div>
                  <div className="text-xs text-base-content/60 -mt-1">MIMILE.COM</div>
                </div>
              </div>
            </Link>
            <div className="border-l border-base-300 pl-4">
              <div className="text-lg font-medium text-primary">精彩生活</div>
              <div className="text-lg font-medium text-primary">快乐购物</div>
            </div>
          </div>

          {/* 中间：搜索区域 */}
          <div className="flex-1 max-w-2xl">
            <form onSubmit={handleSubmit} className="flex">
              <div className="flex-1 relative">
                <input
                  type="search"
                  className="w-full h-12 px-4 border-2 border-primary rounded-l-lg outline-none focus:border-primary"
                  placeholder="请输入商品名称、品牌、关键字"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="h-12 px-8 bg-primary text-white rounded-r-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Search size={20} />
                搜索
              </button>
            </form>
            {/* 热门搜索 */}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-base-content/60">热门搜索：</span>
              <div className="flex flex-wrap gap-2">
                {hotKeywords.map((kw) => (
                  <button
                    key={kw}
                    onClick={() => handleHotKeywordClick(kw)}
                    className="text-xs text-primary hover:underline"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：功能区域 */}
          <div className="flex items-center gap-6">
            {/* 购物车 */}
            <Link
              to="/cart"
              className="flex items-center gap-2 text-base-content hover:text-primary transition-colors"
            >
              <div className="relative">
                <ShoppingCart size={24} />
                {totalCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalCount() > 99 ? '99+' : totalCount()}
                  </span>
                )}
              </div>
              <span>购物车</span>
            </Link>

            {/* 我的商城 */}
            <Link
              to="/profile"
              className="flex items-center gap-2 text-base-content hover:text-primary transition-colors"
            >
              <User size={24} />
              <span>我的商城</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
