/** 购物车商品项 */
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  selected: boolean;
  specs?: string;
  stock: number;
}
