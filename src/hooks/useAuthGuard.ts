import { useLocation } from 'react-router-dom';
import { hasToken } from '../utils/Token';
import { authStore } from '../stores/authAInfoStore';
export type AuthGuardOptions = {
  publicPaths?: string[];
};

const DEFAULT_PUBLIC_PATHS = ['/home', '/', '/login', '/register'];

export function useAuthGuard(options: AuthGuardOptions = {}) {
  const location = useLocation();
  const publicPaths = options.publicPaths ?? DEFAULT_PUBLIC_PATHS;
  const isPublic = publicPaths.includes(location.pathname);
  const authed = hasToken();
  // const AuthInfo = authStore((state)=> )
  return {
    authed,
    isPublic,
    pathname: location.pathname,
  };
}

// 权限守卫 - 根据用户权限判断是否可以访问 /admin
