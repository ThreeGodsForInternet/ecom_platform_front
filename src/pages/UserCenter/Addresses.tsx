import { Plus, Edit, Trash2, MapPin } from 'lucide-react';
import { useState } from 'react';

const mockAddresses = [
  {
    id: 1,
    name: '张三',
    phone: '138****0000',
    address: '北京市朝阳区建国路88号SOHO现代城A座1001室',
    isDefault: true,
  },
  {
    id: 2,
    name: '李四',
    phone: '139****1111',
    address: '上海市浦东新区陆家嘴金融中心B栋2005室',
    isDefault: false,
  },
];

export default function Addresses() {
  const [addresses, setAddresses] = useState(mockAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setDefault = (id: number) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">收货地址</h1>
          <p className="text-slate-500">管理您的收货地址</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <Plus size={16} />
          新增地址
        </button>
      </div>

      {/* 地址列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-primary/50 transition-colors"
          >
            {address.isDefault && (
              <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded mb-3">
                默认地址
              </span>
            )}
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={20} className="text-slate-400 mt-1 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-medium text-slate-800">{address.name}</span>
                  <span className="text-slate-600">{address.phone}</span>
                </div>
                <p className="text-slate-600">{address.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              {!address.isDefault && (
                <button
                  onClick={() => setDefault(address.id)}
                  className="text-primary hover:text-primary/80 text-sm transition-colors"
                >
                  设为默认
                </button>
              )}
              <button className="text-slate-600 hover:text-slate-800 text-sm flex items-center gap-1 transition-colors">
                <Edit size={14} />
                编辑
              </button>
              <button className="text-error hover:text-error/80 text-sm flex items-center gap-1 transition-colors">
                <Trash2 size={14} />
                删除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
