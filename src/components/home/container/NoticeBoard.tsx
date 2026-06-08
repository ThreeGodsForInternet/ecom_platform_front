import { Link } from 'react-router-dom';
import { ChevronRight, Volume2 } from 'lucide-react';

export default function NoticeBoard() {
  const notices = [
    { id: 1, title: '米米乐商城春节发货公告', link: '/notice/1' },
    { id: 2, title: '支付方式升级说明', link: '/notice/2' },
    { id: 3, title: '关于会员积分规则调整通知', link: '/notice/3' },
  ];

  return (
    <div className="bg-base-100 border border-base-300 rounded-lg p-4">
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-primary" />
          <span className="font-medium text-base-content">公告</span>
        </div>
        <Link
          to="/notices"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          更多
          <ChevronRight size={12} />
        </Link>
      </div>

      {/* 公告列表 */}
      <ul className="space-y-2">
        {notices.map((notice) => (
          <li key={notice.id}>
            <Link
              to={notice.link}
              className="flex items-center gap-2 text-sm text-base-content hover:text-primary hover:underline"
            >
              <span className="text-primary">•</span>
              <span>{notice.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
