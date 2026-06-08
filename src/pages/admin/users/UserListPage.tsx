import { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import SearchBar from '../../../components/admin/SearchBar';
import UserFormModal from '../../../components/admin/UserFormModal';
import ConfirmModal from '../../../components/admin/ConfirmModal';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { mockUsers } from '../../../mock/admin';
import type { User } from '../../../types/admin';

// 用户状态Badge
function UserStatusBadge({ status }: { status: User['status'] }) {
  const isActive = status === 'active';
  return (
    <span className={`badge ${isActive ? 'badge-success' : 'badge-error'}`}>
      {isActive ? '启用' : '禁用'}
    </span>
  );
}

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  // 搜索过滤
  const filteredUsers = users.filter((user) =>
    user.username.includes(searchKeyword) || user.phone.includes(searchKeyword)
  );

  const handleAddUser = () => {
    setEditingUser(undefined);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSubmit = (formData: Partial<User>) => {
    if (editingUser) {
      // 编辑
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...formData } as User : u)));
    } else {
      // 新增
      const newUser: User = {
        id: Date.now().toString(),
        username: formData.username || '',
        phone: formData.phone || '',
        memberLevel: formData.memberLevel || '普通会员',
        points: formData.points || 0,
        status: formData.status || 'active',
        createdAt: new Date().toISOString().split('T')[0],
      };
      setUsers([newUser, ...users]);
    }
  };

  const handleDeleteClick = (userId: string) => {
    setDeletingUserId(userId);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (deletingUserId) {
      setUsers(users.filter((u) => u.id !== deletingUserId));
      setDeleteConfirmOpen(false);
      setDeletingUserId(null);
    }
  };

  const handleToggleStatus = (user: User) => {
    setUsers(
      users.map((u) =>
        u.id === user.id
          ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
          : u
      )
    );
  };

  return (
    <PageContainer
      title="用户管理"
      extra={
        <button onClick={handleAddUser} className="btn btn-primary flex items-center gap-2">
          <Plus size={18} />
          新增用户
        </button>
      }
    >
      {/* 搜索栏 */}
      <div className="p-4 border-b border-slate-200">
        <SearchBar
          placeholder="搜索用户名或手机号..."
          onSearch={setSearchKeyword}
        />
      </div>

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-slate-600 font-medium">ID</th>
              <th className="text-slate-600 font-medium">用户名</th>
              <th className="text-slate-600 font-medium">手机号</th>
              <th className="text-slate-600 font-medium">会员等级</th>
              <th className="text-slate-600 font-medium">积分</th>
              <th className="text-slate-600 font-medium">状态</th>
              <th className="text-slate-600 font-medium">创建时间</th>
              <th className="text-slate-600 font-medium">操作</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50">
                <td className="text-slate-700">{user.id}</td>
                <td className="text-slate-700 font-medium">{user.username}</td>
                <td className="text-slate-700">{user.phone}</td>
                <td className="text-slate-700">{user.memberLevel}</td>
                <td className="text-slate-700">{user.points.toLocaleString()}</td>
                <td>
                  <UserStatusBadge status={user.status} />
                </td>
                <td className="text-slate-700">{user.createdAt}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleToggleStatus(user)}
                      className={user.status === 'active' ? 'text-error' : 'text-success'}
                    >
                      {user.status === 'active' ? '禁用' : '启用'}
                    </button>
                    <button
                      onClick={() => handleDeleteClick(user.id)}
                      className="text-error hover:text-error/80 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="py-12">
            <p className="text-center text-slate-500">暂无用户数据</p>
          </div>
        )}
      </div>

      {/* 表单弹窗 */}
      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        user={editingUser}
      />

      {/* 删除确认弹窗 */}
      <ConfirmModal
        isOpen={deleteConfirmOpen}
        title="确认删除"
        message="确定要删除该用户吗？此操作无法撤销。"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteConfirmOpen(false)}
      />
    </PageContainer>
  );
}
