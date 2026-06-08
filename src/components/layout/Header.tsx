import { Link, useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  User,
  LogOut,
  Package,
  ChevronDown,
  Store,
  Heart,
  Headphones,
  Menu,
  Smartphone,
} from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import { useAuthStore } from '../../stores/authStore';
import SearchBar from '../common/SearchBar';
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const totalCount = useCartStore((s) => s.totalCount);
  const { isLoggedIn, user, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* 顶部欢迎栏 */}
      <div className="bg-base-200 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-8 text-xs text-base-content/70">
            {/* 左侧：欢迎语和登录注册 */}
            <div className="flex items-center gap-4">
              <span>您好，欢迎来到米米乐商城！</span>
              {isLoggedIn ? (
                <span>
                  <span className="text-primary font-medium">{user?.nickname}</span>
                </span>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/login" className="text-primary hover:underline">
                    请登录
                  </Link>
                  <span className="text-base-content/30">|</span>
                  <Link to="/login" className="text-primary hover:underline">
                    免费注册
                  </Link>
                </div>
              )}
            </div>

            {/* 右侧：快捷菜单 */}
            <div className="flex items-center gap-4">
              <Link to="/order" className="hover:text-primary">
                我的订单
              </Link>
              <span className="text-base-content/30">|</span>
              <Link to="#" className="hover:text-primary flex items-center gap-1">
                <Heart size={12} /> 我的收藏
              </Link>
              <span className="text-base-content/30">|</span>
              <Link to="#" className="hover:text-primary flex items-center gap-1">
                <Headphones size={12} /> 客服中心
              </Link>
              <span className="text-base-content/30">|</span>
              <Link to="#" className="hover:text-primary flex items-center gap-1">
                <Menu size={12} /> 网站导航
              </Link>
              <span className="text-base-content/30">|</span>
              <Link to="#" className="hover:text-primary flex items-center gap-1">
                <Smartphone size={12} /> 手机米米乐
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 主头部区域 */}
      <div className="bg-base-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* 左侧：Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-primary no-underline"
            >
              <Store size={32} />
              <span>米米乐</span>
            </Link>

            {/* 中间：搜索栏 */}
            <div className="flex-1 max-w-2xl mx-8">
              <SearchBar placeholder="搜索商品、品牌、分类..." size="md" className="w-full" />
            </div>

            {/* 右侧：购物车 */}
            <button
              className="btn btn-primary px-6 h-12 min-h-12 flex items-center gap-2"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart size={20} />
              <span>购物车</span>
              {totalCount() > 0 && (
                <span className="badge badge-secondary">
                  {totalCount() > 99 ? '99+' : totalCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
