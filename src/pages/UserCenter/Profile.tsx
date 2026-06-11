import { User, Camera, Edit, Save } from 'lucide-react';
import { useState } from 'react';

export default function Profile() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">个人信息</h1>
        <p className="text-slate-500">管理您的账户基本信息</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        {/* 头像区域 */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-200">
          <div className="relative">
            <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center">
              <User size={48} className="text-slate-400" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Camera size={16} />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-medium text-slate-800">测试用户</h3>
            <p className="text-slate-500">user@example.com</p>
          </div>
        </div>

        {/* 表单 */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">用户名</label>
              <input
                type="text"
                defaultValue="测试用户"
                disabled={!editing}
                className={`w-full px-4 py-2 border rounded-lg ${
                  editing ? 'border-slate-300 focus:ring-2 focus:ring-primary' : 'bg-slate-50 border-slate-200'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">昵称</label>
              <input
                type="text"
                defaultValue="测试用户"
                disabled={!editing}
                className={`w-full px-4 py-2 border rounded-lg ${
                  editing ? 'border-slate-300 focus:ring-2 focus:ring-primary' : 'bg-slate-50 border-slate-200'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">手机号</label>
              <input
                type="tel"
                defaultValue="138****0000"
                disabled={!editing}
                className={`w-full px-4 py-2 border rounded-lg ${
                  editing ? 'border-slate-300 focus:ring-2 focus:ring-primary' : 'bg-slate-50 border-slate-200'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">邮箱</label>
              <input
                type="email"
                defaultValue="user@example.com"
                disabled={!editing}
                className={`w-full px-4 py-2 border rounded-lg ${
                  editing ? 'border-slate-300 focus:ring-2 focus:ring-primary' : 'bg-slate-50 border-slate-200'
                }`}
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            {editing ? (
              <div className="flex gap-3">
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Save size={16} />
                  保存
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Edit size={16} />
                编辑
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
