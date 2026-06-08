import CategoryMenu from './container/CategoryMenu';
import QuickNavBar from './container/QuickNavBar';
import Banner from './container/Banner';
import UserActionBar from './container/UserActionBar';
import NoticeBoard from './container/NoticeBoard';
import ServiceGuarBar from './container/ServiceGuarBar';

const Container = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* 顶部：QuickNavBar + 分类菜单 + 横幅区域 */}
        <div className="flex gap-4 py-4">
          {/* 左侧：分类菜单 */}
          <div className="flex-shrink-0">
            <CategoryMenu />
          </div>

          {/* 中间和右侧：横幅 + 用户操作栏 + 公告板 */}
          <div className="flex-1 flex flex-col gap-4">
            {/* 顶部导航栏 */}
            <QuickNavBar />

            {/* 中间内容区 */}
            <div className="flex gap-4">
              {/* 左侧：横幅 */}
              <div className="flex-1">
                <Banner />
              </div>

              {/* 右侧：用户操作栏 + 公告板 */}
              <div className="w-64 flex flex-col gap-4">
                <UserActionBar />
                <NoticeBoard />
              </div>
            </div>
          </div>
        </div>

        {/* 底部：服务保障栏 */}
        <ServiceGuarBar />
      </div>
    </div>
  );
};

export default Container;
