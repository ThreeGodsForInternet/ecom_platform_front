// 管理员类型
export interface Admin {
  id: string;
  name: string;
  avatar?: string;
  role: string;
}

// 用户类型
export interface User {
  id: string;
  avatar?: string;
  username: string;
  phone: string;
  memberLevel: string;
  points: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

// 商品类型
export interface Product {
  id: string;
  image?: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  status: 'on' | 'off';
  createdAt: string;
}

// 订单类型
export interface Order {
  id: string;
  orderNo: string;
  user: string;
  amount: number;
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
  createdAt: string;
}

// 仪表盘统计类型
export interface DashboardStats {
  todaySales: number;
  todayOrders: number;
  totalProducts: number;
  totalUsers: number;
}
