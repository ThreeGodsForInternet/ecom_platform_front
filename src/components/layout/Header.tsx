import { Link } from 'react-router-dom';
import {
  Headphones,
  Menu,
  Smartphone,
} from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

export default function Header() {
  const { isLoggedIn, user, } = useAuthStore();

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
                {/* < size={12} /> 我的收藏 */}
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
    </header>
  );
}
