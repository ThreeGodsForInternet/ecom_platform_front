import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        {/* 404 视觉 */}
        <div className="text-9xl font-black text-primary/15 select-none mb-2">404</div>
        <h1 className="text-2xl font-bold mb-2">页面未找到</h1>
        <p className="text-base-content/50 mb-8">
          抱歉，您访问的页面不存在或已被移除。请检查网址是否正确，或返回首页继续浏览。
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline gap-2"
          >
            <ArrowLeft size={18} /> 返回上页
          </button>
          <Link to="/" className="btn btn-primary gap-2">
            <Home size={18} /> 回到首页
          </Link>
        </div>

        {/* 快捷链接 */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-base-content/40">
          <span>热门链接：</span>
          <Link to="/products" className="link link-hover">全部商品</Link>
          <Link to="/cart" className="link link-hover">购物车</Link>
          <Link to="/login" className="link link-hover">登录</Link>
        </div>
      </div>
    </div>
  );
}
