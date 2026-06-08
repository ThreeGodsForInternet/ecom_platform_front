import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { mockProducts } from '../mockdata/mockProducts';
import { mockCategories } from '../mockdata/mockCategories';
import ProductCard from '../components/product/ProductCard';
import EmptyState from '../components/common/EmptyState';
import type { ProductFilter } from '../types';

type SortKey = 'price' | 'sales' | 'rating' | 'newest';

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'sales', label: '销量优先' },
  { key: 'price', label: '价格' },
  { key: 'rating', label: '评分' },
  { key: 'newest', label: '最新' },
];

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const categoryId = searchParams.get('categoryId') || '';
  const tag = searchParams.get('tag') || '';

  const [filter, setFilter] = useState<ProductFilter>({
    keyword,
    categoryId,
    sortBy: 'sales',
    sortOrder: 'desc',
    minPrice: undefined,
    maxPrice: undefined,
  });

  const [showFilter, setShowFilter] = useState(false);

  // 筛选 + 排序
  const filteredProducts = useMemo(() => {
    let list = [...mockProducts];

    // 关键词搜索
    if (filter.keyword) {
      const kw = filter.keyword.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(kw) ||
          p.description.toLowerCase().includes(kw) ||
          p.tags.some((t) => t.toLowerCase().includes(kw))
      );
    }

    // 分类筛选
    if (filter.categoryId) {
      list = list.filter((p) => p.categoryId === filter.categoryId);
    }

    // 标签筛选
    if (tag) {
      list = list.filter((p) => p.tags.includes(tag));
    }

    // 价格区间
    if (filter.minPrice !== undefined) {
      list = list.filter((p) => p.price >= filter.minPrice!);
    }
    if (filter.maxPrice !== undefined) {
      list = list.filter((p) => p.price <= filter.maxPrice!);
    }

    // 排序
    const sortBy = filter.sortBy || 'sales';
    const order = filter.sortOrder === 'asc' ? 1 : -1;
    switch (sortBy) {
      case 'price':
        list.sort((a, b) => (a.price - b.price) * order);
        break;
      case 'rating':
        list.sort((a, b) => (a.rating - b.rating) * order);
        break;
      case 'newest':
        list.sort(
          (a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) * order
        );
        break;
      case 'sales':
      default:
        list.sort((a, b) => (a.sales - b.sales) * order);
        break;
    }

    return list;
  }, [filter, tag]);

  const currentCategory = categoryId ? mockCategories.find((c) => c.id === categoryId) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* 面包屑 / 标题 */}
      <div className="flex items-center flex-wrap gap-2 text-sm text-base-content/50 mb-4">
        <Link to="/" className="hover:text-primary">
          首页
        </Link>
        <span>/</span>
        {currentCategory ? (
          <span className="text-base-content">
            {currentCategory.icon} {currentCategory.name}
          </span>
        ) : keyword ? (
          <span className="text-base-content">搜索 "{keyword}"</span>
        ) : tag ? (
          <span className="text-base-content">{tag}商品</span>
        ) : (
          <span className="text-base-content">全部商品</span>
        )}
        <span className="text-base-content/30">({filteredProducts.length}件)</span>
      </div>

      {/* 筛选 + 排序栏 */}
      <div className="flex flex-wrap items-center gap-3 mb-4 p-3 bg-base-100 rounded-box">
        {/* 手机端筛选按钮 */}
        <button
          className="btn btn-ghost btn-sm lg:hidden"
          onClick={() => setShowFilter(!showFilter)}
        >
          <Filter size={16} /> 筛选
        </button>

        {/* 排序选项 */}
        <div className="flex flex-wrap gap-1">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              className={`btn btn-xs ${filter.sortBy === opt.key ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() =>
                setFilter((f) => ({
                  ...f,
                  sortBy: opt.key,
                  sortOrder:
                    f.sortBy === opt.key ? (f.sortOrder === 'asc' ? 'desc' : 'asc') : 'desc',
                }))
              }
            >
              {opt.label}
              {filter.sortBy === opt.key && (
                <span className="text-[10px]">{filter.sortOrder === 'asc' ? '↑' : '↓'}</span>
              )}
            </button>
          ))}
        </div>

        {/* 活跃筛选标签 */}
        {(filter.keyword || filter.categoryId || filter.minPrice || filter.maxPrice) && (
          <button
            className="btn btn-ghost btn-xs text-error"
            onClick={() =>
              setFilter({
                ...filter,
                keyword: '',
                categoryId: '',
                minPrice: undefined,
                maxPrice: undefined,
              })
            }
          >
            <X size={14} /> 清除筛选
          </button>
        )}
      </div>

      <div className="flex gap-4">
        {/* 侧边筛选（桌面端） */}
        {showFilter && (
          <aside className="w-48 flex-shrink-0 hidden lg:block">
            <div className="bg-base-100 rounded-box p-3 sticky top-24 space-y-4">
              {/* 分类 */}
              <div>
                <h4 className="text-sm font-medium mb-2">商品分类</h4>
                <div className="space-y-1">
                  <button
                    className={`btn btn-xs btn-block justify-start ${
                      !filter.categoryId ? 'btn-primary' : 'btn-ghost'
                    }`}
                    onClick={() => setFilter({ ...filter, categoryId: '' })}
                  >
                    全部分类
                  </button>
                  {mockCategories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`btn btn-xs btn-block justify-start ${
                        filter.categoryId === cat.id ? 'btn-primary' : 'btn-ghost'
                      }`}
                      onClick={() => setFilter({ ...filter, categoryId: cat.id })}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 价格区间 */}
              <div>
                <h4 className="text-sm font-medium mb-2">价格区间</h4>
                <div className="flex gap-1 items-center">
                  <input
                    type="number"
                    placeholder="¥"
                    className="input input-xs input-bordered w-16"
                    value={filter.minPrice ?? ''}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        minPrice: e.target.value ? Number(e.target.value) : undefined,
                      })
                    }
                  />
                  <span className="text-xs text-base-content/30">-</span>
                  <input
                    type="number"
                    placeholder="¥"
                    className="input input-xs input-bordered w-16"
                    value={filter.maxPrice ?? ''}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        maxPrice: e.target.value ? Number(e.target.value) : undefined,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* 商品列表 */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <EmptyState
              icon="🔍"
              title="没有找到相关商品"
              description="试试更换搜索关键词或筛选条件"
              actionText="查看全部商品"
              actionLink="/products"
            />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
