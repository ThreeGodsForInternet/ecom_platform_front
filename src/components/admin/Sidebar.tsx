import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Package } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/users', label: '用户管理', icon: Users },
    { path: '/admin/products', label: '商品管理', icon: Package },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-100 min-h-screen flex flex-col">
      {/* Logo 区域 */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white">米米乐后台</h1>
      </div>

      {/* 菜单列表 */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? 'bg-primary text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
