import { Suspense, lazy } from 'react';
import MainLayout from '../layouts/MainLayout';

// 懒加载页面组件
const Home = lazy(() => import('../pages/Home'));
const ProductList = lazy(() => import('../pages/ProductList'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Order = lazy(() => import('../pages/Order'));
const Login = lazy(() => import('../pages/Login'));
const UserProfile = lazy(() => import('../pages/UserProfile'));
const NotFound = lazy(() => import('../pages/NotFound'));

// 加载中组件
const LazyLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

export const routes = [
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
      {
        path: '/user',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <UserProfile />
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
  {
    path: '*',
    element: (
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
];
