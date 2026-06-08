import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import type { CartItem } from '../../types';

interface CartItemRowProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem, toggleSelect } = useCartStore();

  return (
    <div className="flex items-center gap-3 p-3 bg-base-100 rounded-box hover:bg-base-200/50 transition-colors">
      {/* 选中 */}
      <label className="flex items-center">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-sm"
          checked={item.selected}
          onChange={() => toggleSelect(item.productId)}
        />
      </label>

      {/* 图片 */}
      <div className="w-20 h-20 rounded-lg bg-base-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-2xl text-base-content/15">📦</span>
        )}
      </div>

      {/* 商品信息 */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium line-clamp-2">{item.name}</h4>
        {item.specs && (
          <p className="text-xs text-base-content/40 mt-0.5">{item.specs}</p>
        )}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-bold text-error">¥{item.price}</span>
          {item.originalPrice && (
            <span className="text-xs text-base-content/30 line-through ml-2">
              ¥{item.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* 数量控制 */}
      <div className="flex items-center gap-0">
        <button
          className="btn btn-ghost btn-xs btn-square"
          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
        >
          <Minus size={14} />
        </button>
        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
        <button
          className="btn btn-ghost btn-xs btn-square"
          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
          disabled={item.quantity >= item.stock}
        >
          <Plus size={14} />
        </button>
      </div>

      {/* 小计 */}
      <div className="text-sm font-bold text-error w-20 text-right">
        ¥{(item.price * item.quantity).toFixed(2)}
      </div>

      {/* 删除 */}
      <button
        className="btn btn-ghost btn-xs text-base-content/30 hover:text-error"
        onClick={() => removeItem(item.productId)}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
