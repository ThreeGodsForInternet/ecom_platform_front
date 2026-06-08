import { Link, useLocation } from 'react-router-dom';

export default function QuickNavBar() {
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/', active: location.pathname === '/' },
    { name: '团购', path: '/group-buy', active: false },
    { name: '秒杀', path: '/flash-sale', active: false },
    { name: '组合套餐', path: '/packages', active: false },
    { name: '积分商城', path: '/points', active: false },
    { name: '会员专区', path: '/vip', active: false },
    { name: '企业采购', path: '/enterprise', active: false },
    { name: '第三方店铺', path: '/third-party', active: false },
  ];

  return (
    <div className="bg-base-100 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                px-5 py-3 text-sm font-medium transition-colors
                ${item.active ? 'text-primary border-b-2 border-primary' : 'text-base-content hover:text-primary'}
                ${index === 0 ? 'pl-0' : ''}
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
