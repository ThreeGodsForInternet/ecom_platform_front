import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthGuard } from '../../hooks/useAuthGuard';

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation();
  const { authed, isPublic } = useAuthGuard();

  if (isPublic || authed) return children;

  return <Navigate to="/login" replace state={{ from: location }} />;
}

