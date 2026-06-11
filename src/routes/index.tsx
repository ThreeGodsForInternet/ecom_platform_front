import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../components/admin/AdminLayout';
import UserCenterLayout from '../components/userCenter/UserCenterLayout';
import RequireAuth from '../components/common/RequireAuth';

// 懒加载前台页面组件
const Home = lazy(() => import('../pages/Home'));
const ProductList = lazy(() => import('../pages/ProductList'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const Cart = lazy(() => import('../pages/Cart'));
const Order = lazy(() => import('../pages/Order'));
const Login = lazy(() => import('../pages/Login'));
// const UserProfile = lazy(() => import('../pages/UserProfile'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Register = lazy(() => import('../pages/RegisterPage'));

// 懒加载用户中心页面组件
const UserCenterHome = lazy(() => import('../pages/UserCenter'));
const Profile = lazy(() => import('../pages/UserCenter/Profile'));
const Member = lazy(() => import('../pages/UserCenter/Member'));
const Services = lazy(() => import('../pages/UserCenter/Services'));
const Points = lazy(() => import('../pages/UserCenter/Points'));
const Coupons = lazy(() => import('../pages/UserCenter/Coupons'));
const Gifts = lazy(() => import('../pages/UserCenter/Gifts'));
const Addresses = lazy(() => import('../pages/UserCenter/Addresses'));
const Browsing = lazy(() => import('../pages/UserCenter/Browsing'));
const Orders = lazy(() => import('../pages/UserCenter/Orders'));
const AfterSales = lazy(() => import('../pages/UserCenter/AfterSales'));
const Store = lazy(() => import('../pages/UserCenter/Store'));
const ThirdParty = lazy(() => import('../pages/UserCenter/ThirdParty'));
const FollowShops = lazy(() => import('../pages/UserCenter/FollowShops'));
const CustomerService = lazy(() => import('../pages/UserCenter/CustomerService'));
const Account = lazy(() => import('../pages/UserCenter/Account'));
const Settings = lazy(() => import('../pages/UserCenter/Settings'));

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
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
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
    path: '/home',
    element: <Navigate to="/" replace />,
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
    path: '/register',
    element: (
      <Suspense fallback={<LazyLoader />}>
        <Register />
      </Suspense>
    ),
  },

  // 用户中心路由
  {
    path: '/user',
    element: (
      <RequireAuth>
        <UserCenterLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LazyLoader />}>
            <UserCenterHome />
          </Suspense>
        ),
      },
      {
        path: '/user/profile',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: '/user/member',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Member />
          </Suspense>
        ),
      },
      {
        path: '/user/services',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: '/user/points',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Points />
          </Suspense>
        ),
      },
      {
        path: '/user/coupons',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Coupons />
          </Suspense>
        ),
      },
      {
        path: '/user/gifts',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Gifts />
          </Suspense>
        ),
      },
      {
        path: '/user/addresses',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Addresses />
          </Suspense>
        ),
      },
      {
        path: '/user/browsing',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Browsing />
          </Suspense>
        ),
      },
      {
        path: '/user/orders',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: '/user/after-sales',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <AfterSales />
          </Suspense>
        ),
      },
      {
        path: '/user/store',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Store />
          </Suspense>
        ),
      },
      {
        path: '/user/third-party',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <ThirdParty />
          </Suspense>
        ),
      },
      {
        path: '/user/follow-shops',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <FollowShops />
          </Suspense>
        ),
      },
      {
        path: '/user/customer-service',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <CustomerService />
          </Suspense>
        ),
      },
      {
        path: '/user/account',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Account />
          </Suspense>
        ),
      },
      {
        path: '/user/settings',
        element: (
          <Suspense fallback={<LazyLoader />}>
            <Settings />
          </Suspense>
        ),
      },
    ],
  },

  // 后台路由
  {
    path: '/admin',
    element: (
      <RequireAuth>
        <AdminLayout />
      </RequireAuth>
    ),
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
