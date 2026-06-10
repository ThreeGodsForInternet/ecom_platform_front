import { Link } from 'react-router-dom';
import { Bell, ChevronRight } from 'lucide-react';

const mockNotices = [
  { id: '1', title: '订单支付成功通知', time: '05-20', read: false },
  { id: '2', title: '限时秒杀活动即将开始', time: '05-19', read: true },
  { id: '3', title: '您有一张优惠券即将到期', time: '05-18', read: true },
  { id: '4', title: '系统通知：会员等级变更', time: '05-16', read: true },
];

const mockRecentProducts = [
  { id: '1', name: 'Apple AirPods Pro', price: 1999, image: '🎧' },
  { id: '2', name: '索尼 WH-1000XM5', price: 2599, image: '🎧' },
  { id: '3', name: '美的电饭煲', price: 699, image: '🍚' },
  { id: '4', name: '耐克跑步鞋', price: 619, image: '👟' },
  { id: '5', name: '任天堂 Switch', price: 2099, image: '🎮' },
];

export default function UserRightSidebar() {
  return (
    <div className="space-y-6">
      {/* 站内信 */}
      <div className="bg-white rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-medium text-slate-800">站内信</h3>
          <Link to="/user/messages" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
            更多 <ChevronRight size={14} />
          </Link>
        </div>
        <div className="space-y-3">
          {mockNotices.map((notice) => (
            <div
              key={notice.id}
              className={`flex items-start gap-2 pb-3 border-b border-slate-100 last:border-0 ${!notice.read ? 'pl-2 border-l-2 border-primary' : ''}`}
            >
              {!notice.read && (
                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${notice.read ? 'text-slate-600' : 'text-slate-800 font-medium'}`}>
                  {notice.title}
                </p>
                <p className="text-xs text-slate-400 mt-1">{notice.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 邀请好友卡片 */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-5 text-white">
        <h3 className="text-base font-bold mb-2">邀请好友得奖励</h3>
        <p className="text-sm text-white/80 mb-4">最高可得 200元</p>
        <button className="w-full bg-white text-primary font-medium py-2 rounded-lg hover:bg-white/90 transition-colors">
          立即邀请
        </button>
      </div>

      {/* 最近浏览 */}
      <div className="bg-white rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-medium text-slate-800">最近浏览</h3>
          <Link to="/user/browsing" className="text-sm text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
            查看更多 <ChevronRight size={14} />
          </Link>
        </div>
        <div className="space-y-4">
          {mockRecentProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                {product.image}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm text-slate-800 mb-1 line-clamp-2">{product.name}</h4>
                <span className="text-sm font-bold text-primary">¥{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
