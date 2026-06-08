import { ShieldCheck, RotateCw, Truck, Store, Phone } from 'lucide-react';

export default function ServiceGuarBar() {
  const services = [
    {
      icon: ShieldCheck,
      title: '正品保障',
      desc: '100%正品',
    },
    {
      icon: RotateCw,
      title: '7天无理由退换货',
      desc: '',
    },
    {
      icon: Truck,
      title: '满99元包邮',
      desc: '部分特殊商品除外',
    },
    {
      icon: Store,
      title: '米米乐商城',
      desc: '甄选优质商品日达',
    },
    {
      icon: Phone,
      title: '售后服务',
      desc: '400-8888-888',
    },
  ];

  return (
    <div className="bg-base-100 border-y border-base-300 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3 justify-center">
              <div className="flex-shrink-0">
                <service.icon size={32} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-base-content">{service.title}</span>
                {service.desc && (
                  <span className="text-xs text-base-content/60">{service.desc}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
