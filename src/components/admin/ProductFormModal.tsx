import { useState, useEffect } from 'react';
import type { Product } from '../../types/admin';

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: Partial<Product>) => void;
  product?: Product;
}

export default function ProductFormModal({ isOpen, onClose, onSubmit, product }: ProductFormModalProps) {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: '手机数码',
    price: 0,
    stock: 0,
    sales: 0,
    status: 'on',
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        name: '',
        category: '手机数码',
        price: 0,
        stock: 0,
        sales: 0,
        status: 'on',
      });
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800">
            {product ? '编辑商品' : '新增商品'}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">商品名称</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">分类</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="手机数码">手机数码</option>
              <option value="电脑办公">电脑办公</option>
              <option value="家用电器">家用电器</option>
              <option value="服装鞋包">服装鞋包</option>
              <option value="美妆个护">美妆个护</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">价格</label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">库存</label>
              <input
                type="number"
                required
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">销量</label>
            <input
              type="number"
              value={formData.sales}
              onChange={(e) => setFormData({ ...formData, sales: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">状态</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as Product['status'] })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="on">上架</option>
              <option value="off">下架</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="btn btn-ghost">
              取消
            </button>
            <button type="submit" className="btn btn-primary">
              确定
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
