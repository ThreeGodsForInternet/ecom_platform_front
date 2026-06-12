import { GiftCard, ChevronRight } from 'lucide-react';

const mockGiftCards = [
  {
    id: 1,
    value: 500,
    balance: 350,
    title: '500元礼品卡',
    expireDate: '2024-12-31',
    status: 'available',
  },
  {
    id: 2,
    value: 200,
    balance: 200,
    title: '200元礼品卡',
    expireDate: '2025-06-30',
    status: 'available',
  },
];

export default function Gifts() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">礼品卡包</h1>
        <p className="text-slate-500">管理您的礼品卡</p>
      </div>

      {/* 礼品卡列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockGiftCards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-r from-primary to-red-600 rounded-xl p-6 text-white"
          >
            <div className="flex items-start justify-between mb-4">
              <GiftCard size={32} className="text-white/90" />
              <span className="text-white/80 text-sm">有效期至 {card.expireDate}</span>
            </div>
            <h3 className="text-lg font-medium mb-2">{card.title}</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold">¥{card.balance}</span>
              <span className="text-white/70 text-sm">/ ¥{card.value}</span>
            </div>
            <button className="text-white hover:text-white/90 flex items-center gap-1 transition-colors">
              立即使用
              <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
