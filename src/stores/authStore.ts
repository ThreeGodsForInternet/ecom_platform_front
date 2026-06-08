import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;

  /** 模拟登录 */
  login: (username: string, password: string) => Promise<boolean>;
  /** 登出 */
  logout: () => void;
  /** 更新用户信息 */
  updateUser: (updates: Partial<User>) => void;
}

/** 模拟用户数据 */
const MOCK_USER: User = {
  id: 'u001',
  username: 'testuser',
  nickname: '测试用户',
  avatar: '',
  phone: '138****8888',
  email: 'test@yunshang.com',
  gender: 'secret',
  addresses: [
    {
      id: 'addr001',
      name: '张三',
      phone: '138****8888',
      province: '北京市',
      city: '北京市',
      district: '朝阳区',
      detail: '某某街道100号',
      isDefault: true,
    },
  ],
  createdAt: '2025-01-01',
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      login: async (username: string, _password: string) => {
        // 模拟 API 请求延迟
        await new Promise((resolve) => setTimeout(resolve, 800));
        if (username.trim().length > 0) {
          set({ user: MOCK_USER, isLoggedIn: true });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ user: null, isLoggedIn: false });
      },

      updateUser: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        }));
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);
