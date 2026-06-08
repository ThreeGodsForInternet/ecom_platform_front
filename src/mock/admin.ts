import type { Admin, User, Product, Order, DashboardStats } from '../types/admin';

// 管理员数据
export const mockAdmin: Admin = {
  id: '1',
  name: '系统管理员',
  avatar: '',
  role: 'super_admin',
};

// 用户数据
export const mockUsers: User[] = [
  {
    id: '1',
    username: '张三',
    phone: '138****0001',
    memberLevel: '黄金会员',
    points: 1250,
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    username: '李四',
    phone: '138****0002',
    memberLevel: '白银会员',
    points: 860,
    status: 'active',
    createdAt: '2024-02-20',
  },
  {
    id: '3',
    username: '王五',
    phone: '138****0003',
    memberLevel: '普通会员',
    points: 230,
    status: 'inactive',
    createdAt: '2024-03-10',
  },
  {
    id: '4',
    username: '赵六',
    phone: '138****0004',
    memberLevel: '钻石会员',
    points: 3500,
    status: 'active',
    createdAt: '2024-04-05',
  },
  {
    id: '5',
    username: '钱七',
    phone: '138****0005',
    memberLevel: '普通会员',
    points: 100,
    status: 'active',
    createdAt: '2024-05-12',
  },
];

// 商品数据
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    category: '手机数码',
    price: 9999,
    stock: 150,
    sales: 2300,
    status: 'on',
    createdAt: '2024-01-05',
  },
  {
    id: '2',
    name: 'MacBook Air M3',
    category: '电脑办公',
    price: 8999,
    stock: 80,
    sales: 560,
    status: 'on',
    createdAt: '2024-02-15',
  },
  {
    id: '3',
    name: 'AirPods Pro 2',
    category: '手机数码',
    price: 1899,
    stock: 300,
    sales: 4500,
    status: 'on',
    createdAt: '2024-03-20',
  },
  {
    id: '4',
    name: '华为 Mate 60 Pro',
    category: '手机数码',
    price: 6999,
    stock: 0,
    sales: 1200,
    status: 'off',
    createdAt: '2024-04-10',
  },
  {
    id: '5',
    name: 'iPad Pro 12.9',
    category: '电脑办公',
    price: 8999,
    stock: 120,
    sales: 890,
    status: 'on',
    createdAt: '2024-05-08',
  },
];

// 订单数据
export const mockOrders: Order[] = [
  {
    id: '1',
    orderNo: 'ORD20240608001',
    user: '张三',
    amount: 2999,
    status: 'completed',
    createdAt: '2024-06-08 09:30:00',
  },
  {
    id: '2',
    orderNo: 'ORD20240608002',
    user: '李四',
    amount: 1599,
    status: 'paid',
    createdAt: '2024-06-08 10:15:00',
  },
  {
    id: '3',
    orderNo: 'ORD20240608003',
    user: '王五',
    amount: 5899,
    status: 'shipped',
    createdAt: '2024-06-08 11:45:00',
  },
  {
    id: '4',
    orderNo: 'ORD20240608004',
    user: '赵六',
    amount: 899,
    status: 'pending',
    createdAt: '2024-06-08 14:20:00',
  },
  {
    id: '5',
    orderNo: 'ORD20240608005',
    user: '钱七',
    amount: 3699,
    status: 'completed',
    createdAt: '2024-06-08 16:55:00',
  },
];

// 仪表盘统计
export const mockDashboardStats: DashboardStats = {
  todaySales: 128900,
  todayOrders: 156,
  totalProducts: 2380,
  totalUsers: 12580,
};

// 销售趋势数据
export const mockSalesTrend = [
  { date: '2024-06-01', sales: 89000 },
  { date: '2024-06-02', sales: 105000 },
  { date: '2024-06-03', sales: 92000 },
  { date: '2024-06-04', sales: 115000 },
  { date: '2024-06-05', sales: 98000 },
  { date: '2024-06-06', sales: 125000 },
  { date: '2024-06-07', sales: 118000 },
];
