import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  MapPin,
  Heart,
  Settings,
  Package,
  LogOut,
  Edit3,
  ChevronRight,
  Shield,
  Bell,
  HelpCircle,
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import EmptyState from '../components/common/EmptyState';

type ProfileTab = 'info' | 'address' | 'favorites';

const MENU_ITEMS = [
  { icon: Package, label: '我的订单', link: '/order' },
  { icon: Heart, label: '我的收藏', link: '#' },
  { icon: Bell, label: '消息通知', link: '#' },
  { icon: Shield, label: '安全中心', link: '#' },
  { icon: Settings, label: '账号设置', link: '#' },
  { icon: HelpCircle, label: '帮助中心', link: '#' },
];

export default function UserProfile() {
  const { user, isLoggedIn, logout, updateUser } = useAuthStore();
  const [activeTab, setActiveTab] = useState<ProfileTab>('info');
  const [editing, setEditing] = useState(false);
  const [nickname, setNickname] = useState(user?.nickname || '');

  if (!isLoggedIn || !user) {
    return (
      <div className="max-w-3xl mx-auto px-4">
        <EmptyState
          icon="👤"
          title="请先登录"
          description="登录后可查看个人信息"
          actionText="去登录"
          actionLink="/login"
        />
      </div>
    );
  }

  const handleSaveNickname = () => {
    if (nickname.trim()) {
      updateUser({ nickname: nickname.trim() });
    }
    setEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* 面包屑 */}
      <div className="text-sm text-base-content/50 mb-4 flex items-center gap-1">
        <Link to="/" className="hover:text-primary">首页</Link>
        <ChevronRight size={14} />
        <span className="text-base-content">个人中心</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 左侧：用户卡片 + 菜单 */}
        <aside className="md:col-span-1 space-y-3">
          {/* 用户信息卡片 */}
          <div className="bg-base-100 rounded-box p-4 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-3xl">
                👤
              </span>
            </div>
            {editing ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="input input-bordered input-sm text-center"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  autoFocus
                />
                <div className="flex justify-center gap-1">
                  <button className="btn btn-primary btn-xs" onClick={handleSaveNickname}>
                    保存
                  </button>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      setEditing(false);
                      setNickname(user.nickname);
                    }}
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1">
                <span className="font-semibold">{user.nickname}</span>
                <button
                  className="btn btn-ghost btn-xs btn-circle"
                  onClick={() => setEditing(true)}
                >
                  <Edit3 size={12} />
                </button>
              </div>
            )}
            <p className="text-xs text-base-content/40 mt-1">{user.username}</p>
          </div>

          {/* 功能菜单 */}
          <div className="bg-base-100 rounded-box overflow-hidden">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="flex items-center gap-3 px-4 py-3 hover:bg-base-200 transition-colors text-sm"
              >
                <item.icon size={16} className="text-base-content/50" />
                <span className="flex-1">{item.label}</span>
                <ChevronRight size={14} className="text-base-content/20" />
              </Link>
            ))}
            <button
              className="flex items-center gap-3 px-4 py-3 hover:bg-error/5 transition-colors text-sm text-error w-full"
              onClick={logout}
            >
              <LogOut size={16} />
              <span>退出登录</span>
            </button>
          </div>
        </aside>

        {/* 右侧：内容区 */}
        <main className="md:col-span-3 bg-base-100 rounded-box p-4 md:p-6">
          <div className="tabs tabs-bordered mb-4">
            {([
              { key: 'info', label: '个人信息' },
              { key: 'address', label: '收货地址' },
              { key: 'favorites', label: '我的收藏' },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                className={`tab tab-sm ${activeTab === tab.key ? 'tab-active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'info' && (
            <div className="space-y-3 max-w-lg">
              <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
                <User size={16} className="text-base-content/40" />
                <div>
                  <div className="text-xs text-base-content/40">用户名</div>
                  <div className="text-sm">{user.username}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
                <Edit3 size={16} className="text-base-content/40" />
                <div>
                  <div className="text-xs text-base-content/40">昵称</div>
                  <div className="text-sm">{user.nickname}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
                <span className="text-base">📱</span>
                <div>
                  <div className="text-xs text-base-content/40">手机号</div>
                  <div className="text-sm">{user.phone}</div>
                </div>
              </div>
              {user.email && (
                <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
                  <span className="text-base">📧</span>
                  <div>
                    <div className="text-xs text-base-content/40">邮箱</div>
                    <div className="text-sm">{user.email}</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
                <span className="text-base">🎂</span>
                <div>
                  <div className="text-xs text-base-content/40">性别</div>
                  <div className="text-sm">
                    {user.gender === 'male' ? '男' : user.gender === 'female' ? '女' : '保密'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'address' && (
            <div className="space-y-3">
              {user.addresses.length === 0 ? (
                <EmptyState icon="📍" title="暂无收货地址" description="添加一个收货地址方便购物" />
              ) : (
                user.addresses.map((addr) => (
                  <div
                    key={addr.id}
                    className="p-3 border border-base-300 rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-medium text-sm">{addr.name}</span>
                        <span className="text-xs text-base-content/50">{addr.phone}</span>
                        {addr.isDefault && (
                          <span className="badge badge-primary badge-xs">默认</span>
                        )}
                      </div>
                      <button className="btn btn-ghost btn-xs text-base-content/30">编辑</button>
                    </div>
                    <p className="text-xs text-base-content/50 ml-6">
                      {addr.province} {addr.city} {addr.district} {addr.detail}
                    </p>
                  </div>
                ))
              )}
              <button className="btn btn-outline btn-sm w-full mt-2">+ 新增地址</button>
            </div>
          )}

          {activeTab === 'favorites' && (
            <EmptyState
              icon="❤️"
              title="暂无收藏商品"
              description="看到喜欢的商品记得收藏哦"
              actionText="去逛逛"
              actionLink="/products"
            />
          )}
        </main>
      </div>
    </div>
  );
}
