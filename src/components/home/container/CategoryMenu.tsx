import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Menu } from 'lucide-react';

export default function CategoryMenu() {
  const [isExpanded, setIsExpanded] = useState(true);

  const categories = [
    { id: 'c1', name: '手机 / 数码 / 通信', icon: '📱' },
    { id: 'c2', name: '电脑 / 办公', icon: '💻' },
    { id: 'c3', name: '家用电器', icon: '🏠' },
    { id: 'c4', name: '厨具 / 餐饮 / 用品', icon: '🍳' },
    { id: 'c5', name: '美妆 / 个护清洁', icon: '💄' },
    { id: 'c6', name: '服饰 / 箱包鞋靴', icon: '👗' },
    { id: 'c7', name: '食品 / 生鲜 / 酒水', icon: '🍎' },
    { id: 'c8', name: '家居 / 家纺 / 家装', icon: '🛋️' },

  ];

  return (
    <div className="bg-base-100 border border-base-300 rounded-lg overflow-hidden w-64">
      {/* 标题栏 */}
      <div
        className="bg-primary text-white px-4 py-3 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Menu size={18} />
          <span className="font-medium">全部商品分类</span>
        </div>
        <ChevronRight
          size={18}
          className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
        />
      </div>

      {/* 分类列表 */}
      {isExpanded && (
        <ul className="divide-y divide-base-200">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                to={`/products?categoryId=${cat.id}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-primary/5 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-sm text-base-content group-hover:text-primary transition-colors">
                    {cat.name}
                  </span>
                </div>
                <ChevronRight
                  size={14}
                  className="text-base-content/40 group-hover:text-primary transition-colors"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
