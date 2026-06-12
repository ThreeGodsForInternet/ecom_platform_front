import { ShoppingBag, Headphones, Shield, Gift } from 'lucide-react';

export default function Services() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">会员服务</h1>
        <p className="text-slate-500">专享会员服务</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            icon: ShoppingBag,
            title: '专属客服',
            description: '一对一专属客服服务',
          },
          {
            icon: Headphones,
            title: '优先热线',
            description: '会员专属热线电话',
          },
          {
            icon: Shield,
            title: '售后保障',
            description: '延长退换货时间',
          },
          {
            icon: Gift,
            title: '生日礼包',
            description: '生日专属福利',
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <service.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-2">{service.title}</h3>
            <p className="text-slate-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
