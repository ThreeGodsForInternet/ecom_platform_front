import { Bell, Lock, User, Shield, Palette } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">设置</h1>
        <p className="text-slate-500">账户设置</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {[
          { icon: User, title: '个人资料', desc: '编辑个人信息' },
          { icon: Bell, title: '消息通知', desc: '设置通知偏好' },
          { icon: Lock, title: '账号安全', desc: '密码、手机号修改' },
          { icon: Palette, title: '主题设置', desc: '切换主题颜色' },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-slate-800 font-medium">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
            <div className="text-slate-400">›</div>
          </div>
        ))}
      </div>
    </div>
  );
}
