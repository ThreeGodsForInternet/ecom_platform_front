import { useState, useEffect } from 'react';
import type { User } from '../../types/admin';

interface UserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: Partial<User>) => void;
  user?: User;
}

export default function UserFormModal({ isOpen, onClose, onSubmit, user }: UserFormModalProps) {
  const [formData, setFormData] = useState<Partial<User>>({
    username: '',
    phone: '',
    memberLevel: '普通会员',
    points: 0,
    status: 'active',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        username: '',
        phone: '',
        memberLevel: '普通会员',
        points: 0,
        status: 'active',
      });
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800">
            {user ? '编辑用户' : '新增用户'}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">用户名</label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">手机号</label>
            <input
              type="text"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">会员等级</label>
            <select
              value={formData.memberLevel}
              onChange={(e) => setFormData({ ...formData, memberLevel: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="普通会员">普通会员</option>
              <option value="白银会员">白银会员</option>
              <option value="黄金会员">黄金会员</option>
              <option value="钻石会员">钻石会员</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">积分</label>
            <input
              type="number"
              value={formData.points}
              onChange={(e) => setFormData({ ...formData, points: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">状态</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as User['status'] })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="active">启用</option>
              <option value="inactive">禁用</option>
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
