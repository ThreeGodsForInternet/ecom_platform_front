import { History, Trash2, Calendar, Heart } from 'lucide-react';

const mockProducts = [
  { id: 1, name: '小米 14 Ultra', price: 6499, image: '📱', category: '手机数码' },
  { id: 2, name: 'SK-II 神仙水 230ml', price: 1540, image: '💧', category: '美妆个护' },
  { id: 3, name: '三只松鼠坚果大礼包', price: 79.9, image: '🥜', category: '食品生鲜' },
  { id: 4, name: '戴森吹风机 HD15', price: 2999, image: '💨', category: '家用电器' },
  { id: 5, name: 'Apple Watch Series 9', price: 2999, image: '⌚', category: '手机数码' },
  { id: 6, name: '华为 Mate 60 Pro', price: 6999, image: '📱', category: '手机数码' },
];

export default function Browsing() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">浏览记录</h1>
          <p className="text-slate-500">查看您最近浏览的商品</p>
        </div>
        <button className="flex items-center gap-2 text-slate-500 hover:text-error transition-colors">
          <Trash2 size={16} />
          清空历史
        </button>
      </div>

      {/* 日期分组 */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4 text-slate-600">
            <Calendar size={16} />
            <span>今天</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-slate-100 flex items-center justify-center text-5xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="text-slate-800 font-medium mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-primary font-bold text-lg">¥{product.price}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-slate-400">{product.category}</span>
                    <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4 text-slate-600">
            <Calendar size={16} />
            <span>昨天</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockProducts.slice(4).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-slate-100 flex items-center justify-center text-5xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="text-slate-800 font-medium mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-primary font-bold text-lg">¥{product.price}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-slate-400">{product.category}</span>
                    <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
