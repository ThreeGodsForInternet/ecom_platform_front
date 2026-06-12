import { MessageSquare, Phone, HelpCircle } from 'lucide-react';

export default function CustomerService() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">客户中心</h1>
        <p className="text-slate-500">联系客服获取帮助</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={32} className="text-primary" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">在线客服</h3>
          <p className="text-slate-500 text-sm">9:00-22:00 在线服务</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone size={32} className="text-primary" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">客服热线</h3>
          <p className="text-primary font-bold">400-888-8888</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={32} className="text-primary" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">帮助中心</h3>
          <p className="text-slate-500 text-sm">常见问题解答</p>
        </div>
      </div>
    </div>
  );
}
