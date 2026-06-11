import { useState } from 'react';
import FlashSaleSection from './activity/FlashSaleSection';
import RecommendedSection from './activity/RecommendedSection';
import RankingListSection from './activity/RankingListSection';
import MoreActivitys from './activity/MoreActivitys';
import FeatureGrid from './activity/FeatureGrid';
export default function Activitys() {
  const [activeTab, setActiveTab] = useState('recommend');

  const tabs = [
    { id: 'recommend', name: '为你推荐' },
    { id: 'new', name: '最新上架' },
    { id: 'hot', name: '热卖商品' },
    { id: 'discount', name: '特惠商品' },
  ];

  return (
    <div className="bg-base-200 py-4">
      <div className="max-w-7xl flex mx-auto px-4 space-y-4">
        {/* 第一行：闪购 + 右侧活动 + 榜单 */}
        <div
          className="flex flex-col
         gap-4"
        >
          {/* 左侧：限时闪购 */}
          <div className="w-100px">
            <FlashSaleSection />
          </div>
          {/* 右侧：活动入口 + 榜单 */}
          <div className="space-y-6 h-full">
            {/* 活动入口 */}
            <FeatureGrid />
          </div>
        </div>
        <div className="space-y-4">
          {/* 热销榜单 */}
          <RankingListSection />
        </div>
      </div>

      {/* 第二行：精选推荐 */}
      <div className="bg-base-100 rounded-2xl p-4">
        {/* 标签切换 */}
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-bold text-base-content mr-4">精选推荐</h2>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-base-200 text-base-content hover:bg-base-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* 推荐内容 */}
        <RecommendedSection />
      </div>

      {/* 第三行：底部活动 */}
      <div>
        <MoreActivitys></MoreActivitys>
      </div>
    </div>
  );
}
