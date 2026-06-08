import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Login from '../pages/Login';
import UserProfile from '../pages/UserProfile';
import NotFound from '../pages/NotFound';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
