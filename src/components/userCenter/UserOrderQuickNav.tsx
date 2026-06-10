import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Truck, 
  CheckCircle, 
  Star, 
  RefreshCcw, 
  ChevronRight 
} from 'lucide-react';

export default function UserOrderQuickNav() {
  const orderNavItems = [
    { id: 'pending', label: '待付款', icon: ShoppingBag, badge: 2 },
    { id: 'delivering', label: '待发货', icon: Truck, badge: 3 },
    { id: 'receiving', label: '待收货', icon: CheckCircle, badge: 1 },
    { id: 'review', label: '待评价', icon: Star, badge: 0 },
    { id: 'after-sales', label: '退款售后', icon: RefreshCcw, badge: 0 },
  ];

  return (
    <div className="bg-white rounded-xl p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium text-slate-800">我的订单</h3>
        <Link to="/user/orders" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
          查看全部订单 <ChevronRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {orderNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={`/user/orders?type=${item.id}`}
              className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors relative"
            >
              {item.badge > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <Icon size={20} className="text-slate-600" />
              </div>
              <span className="text-sm text-slate-700">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
