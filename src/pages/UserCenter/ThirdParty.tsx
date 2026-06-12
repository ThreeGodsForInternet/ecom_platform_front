import { Globe, Store } from 'lucide-react';

const mockShops = [
  { name: '小米官方旗舰店', products: 128, image: '📱' },
  { name: '华为官方旗舰店', products: 95, image: '📱' },
  { name: '苹果官方旗舰店', products: 76, image: '🍎' },
];

export default function ThirdParty() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">第三方店铺</h1>
        <p className="text-slate-500">浏览第三方店铺</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockShops.map((shop, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
          >
            <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-6xl">
              {shop.image}
            </div>
            <div className="p-4">
              <h3 className="text-slate-800 font-medium mb-2">{shop.name}</h3>
              <p className="text-slate-500 text-sm mb-3">{shop.products} 件商品</p>
              <button className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                进入店铺
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
