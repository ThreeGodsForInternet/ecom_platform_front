import { useLocation, Link } from 'react-router-dom';
import { User, ChevronRight } from 'lucide-react';
import { mockAdmin } from '../../mock/admin';

export default function Header() {
  const location = useLocation();

  const breadcrumbMap: Record<string, string> = {
    '/admin': '首页',
    '/admin/dashboard': 'Dashboard',
    '/admin/users': '用户管理',
    '/admin/products': '商品管理',
  };

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    return {
      path,
      label: breadcrumbMap[path] || segment,
    };
  });

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      {/* 面包屑 */}
      <div className="flex items-center gap-2 text-sm">
        <Link to="/admin" className="text-slate-500 hover:text-primary">首页</Link>
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.path} className="flex items-center gap-2">
            <ChevronRight size={16} className="text-slate-400" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-slate-800 font-medium">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="text-slate-500 hover:text-primary">
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* 用户信息 */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center">
            <User size={18} className="text-slate-600" />
          </div>
          <span className="text-slate-700 font-medium">{mockAdmin.name}</span>
        </div>
      </div>
    </header>
  );
}
