import { Store, Heart, Shield, Truck } from 'lucide-react';

const FEATURES = [
  { icon: Shield, title: '正品保障', desc: '100%正品承诺' },
  { icon: Truck, title: '极速物流', desc: '次日达覆盖全国' },
  { icon: Heart, title: '售后无忧', desc: '7天无理由退换' },
  { icon: Store, title: '品牌直供', desc: '源头好货直供' },
];

const LINK_GROUPS = [
  {
    title: '购物指南',
    links: ['购物流程', '会员介绍', '生活旅行', '常见问题'],
  },
  {
    title: '配送方式',
    links: ['上门自提', '211限时达', '配送服务查询', '配送费收取标准'],
  },
  {
    title: '支付方式',
    links: ['货到付款', '在线支付', '分期付款', '邮局汇款'],
  },
  {
    title: '售后服务',
    links: ['售后政策', '价格保护', '退款说明', '返修/退换货'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-12">
      {/* 特色服务 */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-base-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <feat.icon size={28} className="text-primary flex-shrink-0" />
              <div>
                <div className="font-medium text-sm">{feat.title}</div>
                <div className="text-xs text-base-content/50">{feat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 链接区域 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="font-medium text-sm mb-3">{group.title}</h4>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <span className="text-xs text-base-content/50 hover:text-primary cursor-pointer transition-colors">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 底部版权 */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm text-base-content/50">
            <Store size={16} />
            <span>米米乐</span>
          </div>
          <p className="text-xs text-base-content/30">
            © 2026 米米乐.com — 综合线上购物平台（仅供学习参考）
          </p>
        </div>
      </div>
    </footer>
  );
}
