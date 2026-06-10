import { Suspense, lazy } from 'react';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../components/admin/AdminLayout';

// 懒加载前台页面组件
const Home = lazy(() => import('../pages/Home'));
const ProductList = lazy(() => import('../pages/ProductList'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Order = lazy(() => import('../pages/Order'));
const Login = lazy(() => import('../pages/Login'));
const UserProfile = lazy(() => import('../pages/UserProfile'));
const NotFound = lazy(() => import('../pages/NotFound'));

// 懒加载用户中心页面组件
const UserCenter = lazy(() => import('../pages/UserCenter'));

// 懒加载后台页面组件
const DashboardPage = lazy(() => import('../pages/admin/dashboard/DashboardPage'));
const UserListPage = lazy(() => import('../pages/admin/users/UserListPage'));
const ProductListPage = lazy(() => import('../pages/admin/products/ProductListPage'));

// 加载中组件
const LazyLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

export const routes = [
  // 前台路由
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: '/products/:id',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/order',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Order />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    ),
  },

  // 用户中心路由
  {
    path: '/user',
    element: (
      <Suspense fallback={<LazyLoader />}>
        <UserCenter />
      </Suspense>
    ),
  },

  // 后台路由
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LazyLoader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: '/admin/dashboard',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: '/admin/users',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <UserListPage />
          </Suspense>
        ),
      },
      {
        path: '/admin/products',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <ProductListPage />
          </Suspense>
        ),
      },
    ],
  },

  // 404
  {
    path: '*',
    element: (
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
];
