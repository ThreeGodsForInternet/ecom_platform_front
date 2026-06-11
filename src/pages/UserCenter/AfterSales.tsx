import { MessageSquare, FileText, Star } from 'lucide-react';

export default function AfterSales() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">评价与晒单</h1>
        <p className="text-slate-500">分享您的购物体验</p>
      </div>

      {/* 标签页 */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm">待评价</button>
        <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm transition-colors">已评价</button>
      </div>

      {/* 待评价列表 */}
      <div className="space-y-4">
        {[
          { name: '小米 14 Ultra', price: 5999, image: '📱' },
          { name: 'SK-II 神仙水 230ml', price: 1540, image: '💧' },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                {item.image}
              </div>
              <div className="flex-1">
                <h4 className="text-slate-800 font-medium mb-1">{item.name}</h4>
                <p className="text-primary font-bold mb-4">¥{item.price}</p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <Star size={16} />
                    立即评价
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
