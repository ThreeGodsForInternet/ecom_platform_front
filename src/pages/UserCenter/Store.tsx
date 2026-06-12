import { Store, Bell, ChevronRight } from 'lucide-react';

const mockMessages = [
  {
    id: 1,
    title: '订单发货通知',
    content: '您的订单已发货，点击查看物流信息',
    date: '2024-06-08',
    read: false,
  },
  {
    id: 2,
    title: '限时秒杀活动即将开始',
    content: '6月18日限时秒杀活动，敬请关注',
    date: '2024-06-07',
    read: true,
  },
  {
    id: 3,
    title: '您有一张优惠券即将过期',
    content: '满500减100优惠券将于6月15日过期',
    date: '2024-06-06',
    read: true,
  },
];

export default function Store() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">站点信</h1>
        <p className="text-slate-500">查看系统通知</p>
      </div>

      {/* 消息列表 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer ${
              !msg.read ? 'bg-primary/5' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell size={18} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-medium ${!msg.read ? 'text-slate-900' : 'text-slate-600'}`}>
                      {msg.title}
                    </h4>
                    {!msg.read && <span className="w-2 h-2 bg-primary rounded-full" />}
                  </div>
                  <p className="text-slate-500 text-sm mb-2">{msg.content}</p>
                  <span className="text-xs text-slate-400">{msg.date}</span>
                </div>
              </div>
              <ChevronRight size={16} className="text-slate-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
