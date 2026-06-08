import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ChevronRight } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';
import CartItemRow from '../components/cart/CartItemRow';
import EmptyState from '../components/common/EmptyState';

export default function Cart() {
  const { items, clearCart, toggleSelectAll, selectedCount, selectedTotal, isAllSelected } =
    useCartStore();

  const allSelected = isAllSelected();
  const count = selectedCount();
  const total = selectedTotal();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4">
        <EmptyState
          icon="🛒"
          title="购物车是空的"
          description="快去挑选心仪的商品吧"
          actionText="去逛逛"
          actionLink="/products"
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* 面包屑 */}
      <div className="text-sm text-base-content/50 mb-4 flex items-center gap-1">
        <Link to="/" className="hover:text-primary">首页</Link>
        <ChevronRight size={14} />
        <span className="text-base-content">购物车</span>
      </div>

      <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
        <ShoppingCart size={24} />
        我的购物车
        <span className="text-sm font-normal text-base-content/50">({items.length}件)</span>
      </h1>

      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between mb-3 p-3 bg-base-100 rounded-box">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={allSelected}
            onChange={toggleSelectAll}
          />
          <span className="text-sm">{allSelected ? '取消全选' : '全选'}</span>
        </label>
        <button
          className="btn btn-ghost btn-xs text-base-content/40 hover:text-error"
          onClick={clearCart}
        >
          <Trash2 size={14} /> 清空购物车
        </button>
      </div>

      {/* 购物车列表 */}
      <div className="space-y-2 mb-6">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </div>

      {/* 底部结算栏 */}
      <div className="sticky bottom-0 bg-base-100 border border-base-300 rounded-box p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-base-content/50">
            已选 <span className="font-bold text-base-content">{count}</span> 件
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-sm text-base-content/50">合计: </span>
            <span className="text-2xl font-bold text-error">¥{total.toFixed(2)}</span>
          </div>
          <Link
            to="/order"
            className={`btn btn-primary ${count === 0 ? 'btn-disabled' : ''}`}
          >
            去结算 ({count})
          </Link>
        </div>
      </div>
    </div>
  );
}
