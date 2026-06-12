import { Link, useNavigate } from 'react-router-dom';
import { User, Crown, Ticket, FileText, Heart } from 'lucide-react';
import { getToken } from '../../../utils/Token';
// import { useAuthStore } from '../../../stores/authStore';

export default function UserActionBar() {
  // const { isLoggedIn, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const actions = [
    { icon: Crown, name: '会员中心', path: '/user' },
    { icon: Ticket, name: '优惠券', path: '/coupons' },
    { icon: FileText, name: '我的订单', path: '/order' },
    { icon: Heart, name: '我的收藏', path: '/favorites', badge: 2 },
  ];

  return (
    <div className="bg-base-100 border border-base-300 rounded-lg p-4">
      {/* 用户信息区域 */}
      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-16 h-16 bg-base-200 rounded-full flex items-center justify-center mb-3">
          <User size={40} className="text-base-content/40" />
        </div>
        {/* {isLoggedIn ? (
          <div>
            <p className="text-base-content font-medium">Hi，{user?.nickname}</p>
            <button onClick={logout} className="text-xs text-primary hover:underline mt-1">
              退出登录
            </button>
          </div>
        ) : ( */}
        <div>
          <p className="text-base-content/70 mb-3">Hi，欢迎来到米米乐</p>
          {!getToken() && (
            <div className="flex gap-3">
              <button onClick={() => navigate('/login')} className="btn btn-primary btn-sm px-6">
                登录
              </button>
              <button onClick={() => navigate('/login')} className="btn btn-outline btn-sm px-6">
                注册
              </button>
            </div>
          )}
        </div>
        {/* )} */}
      </div>

      {/* 操作菜单 */}
      <div className="grid grid-cols-4 gap-2">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-primary/5 transition-colors group relative"
          >
            <action.icon
              size={20}
              className="text-primary group-hover:scale-110 transition-transform"
            />
            <span className="text-xs text-base-content/70 group-hover:text-primary transition-colors">
              {action.name}
            </span>
            {action.badge && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                {action.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
