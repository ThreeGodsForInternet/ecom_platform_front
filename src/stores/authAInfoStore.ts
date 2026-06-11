import { create } from 'zustand';

export interface AuthInfo {
  token: string;
  username: string;
  nickname: string;
  role: string;
}

// 全局状态仓库类型
interface AuthStore {
  authInfo: AuthInfo | null;
  setAuthInfo: (authInfo: AuthInfo | null) => void;
  getAuthToken: () => string;
}
// 创建认证以及信息状态
export const authStore = create<AuthStore>((set, get) => ({
  authInfo: null,
  setAuthInfo: (authInfo: AuthInfo | null) => set({ authInfo }),
  getAuthToken: () => get().authInfo?.token || '',
}));
