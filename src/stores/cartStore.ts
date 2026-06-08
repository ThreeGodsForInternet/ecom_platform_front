import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../types';

interface CartState {
  items: CartItem[];

  /** 添加商品到购物车 */
  addItem: (item: Omit<CartItem, 'id' | 'selected'>) => void;
  /** 移除商品 */
  removeItem: (productId: string) => void;
  /** 更新商品数量 */
  updateQuantity: (productId: string, quantity: number) => void;
  /** 切换选中状态 */
  toggleSelect: (productId: string) => void;
  /** 全选 / 取消全选 */
  toggleSelectAll: () => void;
  /** 清空购物车 */
  clearCart: () => void;

  /** 计算属性：选中商品总数 */
  selectedCount: () => number;
  /** 计算属性：选中商品总价 */
  selectedTotal: () => number;
  /** 计算属性：购物车商品总数 */
  totalCount: () => number;
  /** 计算属性：是否全选 */
  isAllSelected: () => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existing = get().items.find((i) => i.productId === item.productId);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.productId === item.productId
                ? { ...i, quantity: Math.min(i.quantity + item.quantity, item.stock) }
                : i,
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              { ...item, id: `${item.productId}-${Date.now()}`, selected: true },
            ],
          });
        }
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((i) => i.productId !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.productId === productId
              ? { ...i, quantity: Math.min(quantity, i.stock) }
              : i,
          ),
        });
      },

      toggleSelect: (productId) => {
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, selected: !i.selected } : i,
          ),
        });
      },

      toggleSelectAll: () => {
        const allSelected = get().isAllSelected();
        set({
          items: get().items.map((i) => ({ ...i, selected: !allSelected })),
        });
      },

      clearCart: () => set({ items: [] }),

      selectedCount: () => get().items.filter((i) => i.selected).length,
      selectedTotal: () =>
        get().items
          .filter((i) => i.selected)
          .reduce((sum, i) => sum + i.price * i.quantity, 0),
      totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      isAllSelected: () =>
        get().items.length > 0 && get().items.every((i) => i.selected),
    }),
    {
      name: 'cart-storage',
    },
  ),
);
