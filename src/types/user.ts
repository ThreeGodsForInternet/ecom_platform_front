/** 用户地址 */
export interface Address {
  id: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detail: string;
  isDefault: boolean;
}

/** 用户信息 */
export interface User {
  id: string;
  username: string;
  nickname: string;
  avatar: string;
  phone: string;
  email?: string;
  gender: 'male' | 'female' | 'secret';
  birthday?: string;
  addresses: Address[];
  createdAt: string;
}
