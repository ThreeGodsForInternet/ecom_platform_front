import { Outlet } from 'react-router-dom';
import UserSidebar from './UserSidebar';

export default function UserCenterLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* 左侧侧边栏 */}
      <UserSidebar />
      {/* 右侧内容区 */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
