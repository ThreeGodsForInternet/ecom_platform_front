import { Link, useLocation } from 'react-router-dom';
import {
  User,
  Crown,
  ShoppingBag,
  Star,
  MapPin,
  FileText,
  History,
  CreditCard,
  Award,
  Gift,
  MessageSquare,
  Globe,
  Heart,
  Store,
  Settings,
  ChevronRight,
} from 'lucide-react';

const menuItems = [
  { id: 'profile', label: '个人信息', icon: User, path: '/user/profile' },
  { id: 'member', label: '会员等级', icon: Crown, path: '/user/member' },
  { id: 'services', label: '会员服务', icon: ShoppingBag, path: '/user/services' },
  { id: 'points', label: '我的积分', icon: Star, path: '/user/points' },
  { id: 'coupons', label: '优惠券', icon: Award, path: '/user/coupons' },
  // { id: 'gifts', label: '礼品卡包', icon: Gift, path: '/user/gifts' },
  { id: 'addresses', label: '收货地址', icon: MapPin, path: '/user/addresses' },
  { id: 'browsing', label: '浏览记录', icon: History, path: '/user/browsing' },
  { id: 'orders', label: '我的订单', icon: FileText, path: '/user/orders' },
  { id: 'after-sales', label: '评价与晒单', icon: MessageSquare, path: '/user/after-sales' },
  // { id: 'store', label: '站点信', icon: Store, path: '/user/store' },
  { id: 'third-party', label: '第三方店铺', icon: Globe, path: '/user/third-party' },
  { id: 'follow-shops', label: '关注店铺', icon: Heart, path: '/user/follow-shops' },
  {
    id: 'customer-service',
    label: '客户中心',
    icon: MessageSquare,
    path: '/user/customer-service',
  },
  { id: 'account', label: '账户中心', icon: CreditCard, path: '/user/account' },
  { id: 'settings', label: '设置', icon: Settings, path: '/user/settings' },
];

export default function UserSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // 找到当前激活的菜单项
  const activeMenu = menuItems.find((item) => currentPath.startsWith(item.path)) || {
    id: '',
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 min-h-screen flex flex-col">
      {/* 用户信息卡 */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-2xl text-slate-400">
            <User size={32} />
          </div>
          <div>
            <p className="text-sm text-slate-500">Hi, 欢迎来到用户</p>
            <p className="font-medium text-slate-800">测试用户</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                普通会员
              </span>
              <span className="text-xs text-slate-500">成长值:0</span>
            </div>
          </div>
        </div>
      </div>

      {/* 菜单导航 */}
      <nav className="flex-1 py-4">
        <div className="px-4 py-2">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
            账户首页
          </p>
        </div>
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu.id === item.id;

            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center justify-between px-6 py-3 text-sm transition-colors ${
                  isActive
                    ? 'bg-primary text-white font-medium'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>
                {isActive && <ChevronRight size={16} />}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
