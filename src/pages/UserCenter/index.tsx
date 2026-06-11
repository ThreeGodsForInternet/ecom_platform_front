import UserSidebar from '../../components/userCenter/UserSidebar';
import UserHeaderCard from '../../components/userCenter/UserHeaderCard';
import UserStatCards from '../../components/userCenter/UserStatCards';
import UserOrderQuickNav from '../../components/userCenter/UserOrderQuickNav';
import UserRecentBrowsing from '../../components/userCenter/UserRecentBrowsing';
import UserRecommendedProducts from '../../components/userCenter/UserRecommendedProducts';
import UserRightSidebar from '../../components/userCenter/UserRightSidebar';

export default function UserCenter() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {/* 左侧侧边栏 */}
          {/* <UserSidebar /> */}

          {/* 右侧主内容区 */}
          <div className="flex-1 p-6">
            <div className="flex gap-6">
              {/* 主内容区 */}
              <div className="flex-1">
                {/* 顶部用户信息卡片 */}
                <UserHeaderCard />

                {/* 统计卡片 */}
                <UserStatCards />

                {/* 订单快捷导航 */}
                <UserOrderQuickNav />

                {/* 最近浏览
                <UserRecentBrowsing /> */}

                {/* 为你推荐 */}
                <UserRecommendedProducts />
              </div>

              {/* 右侧边栏 */}
              <div className="w-80 flex-shrink-0">
                <UserRightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
