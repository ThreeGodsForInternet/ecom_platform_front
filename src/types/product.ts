/** 商品分类 */
export interface Category {
  id: string;
  name: string;
  icon?: string;
  parentId?: string;
  children?: Category[];
}

/** 商品规格 */
export interface Spec {
  name: string;
  value: string;
}

/** 商品图片 */
export interface ProductImage {
  id: string;
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

/** 商品 */
export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  stock: number;
  sales: number;
  images: ProductImage[];
  categoryId: string;
  specs: Spec[];
  tags: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isHot?: boolean;
  createdAt: string;
}

/** 商品筛选条件 */
export interface ProductFilter {
  keyword?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price' | 'sales' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}
