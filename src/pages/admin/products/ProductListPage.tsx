import { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import SearchBar from '../../../components/admin/SearchBar';
import ProductFormModal from '../../../components/admin/ProductFormModal';
import ConfirmModal from '../../../components/admin/ConfirmModal';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { mockProducts } from '../../../mock/admin';
import type { Product } from '../../../types/admin';

// 商品状态Badge
function ProductStatusBadge({ status }: { status: Product['status'] }) {
  const isOn = status === 'on';
  return (
    <span className={`badge ${isOn ? 'badge-success' : 'badge-error'}`}>
      {isOn ? '上架' : '下架'}
    </span>
  );
}

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // 搜索过滤
  const filteredProducts = products.filter((product) =>
    product.name.includes(searchKeyword) || product.category.includes(searchKeyword)
  );

  // 分页
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  const handleAddProduct = () => {
    setEditingProduct(undefined);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleSubmit = (formData: Partial<Product>) => {
    if (editingProduct) {
      // 编辑
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? ({ ...p, ...formData } as Product) : p
        )
      );
    } else {
      // 新增
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name || '',
        category: formData.category || '手机数码',
        price: formData.price || 0,
        stock: formData.stock || 0,
        sales: formData.sales || 0,
        status: formData.status || 'on',
        createdAt: new Date().toISOString().split('T')[0],
      };
      setProducts([newProduct, ...products]);
    }
  };

  const handleDeleteClick = (productId: string) => {
    setDeletingProductId(productId);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (deletingProductId) {
      setProducts(products.filter((p) => p.id !== deletingProductId));
      setDeleteConfirmOpen(false);
      setDeletingProductId(null);
    }
  };

  const handleToggleStatus = (product: Product) => {
    setProducts(
      products.map((p) =>
        p.id === product.id
          ? { ...p, status: p.status === 'on' ? 'off' : 'on' }
          : p
      )
    );
  };

  return (
    <PageContainer
      title="商品管理"
      extra={
        <button onClick={handleAddProduct} className="btn btn-primary flex items-center gap-2">
          <Plus size={18} />
          新增商品
        </button>
      }
    >
      {/* 搜索栏 */}
      <div className="p-4 border-b border-slate-200">
        <SearchBar
          placeholder="搜索商品名称或分类..."
          onSearch={setSearchKeyword}
        />
      </div>

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-slate-600 font-medium">ID</th>
              <th className="text-slate-600 font-medium">商品名称</th>
              <th className="text-slate-600 font-medium">分类</th>
              <th className="text-slate-600 font-medium">价格</th>
              <th className="text-slate-600 font-medium">库存</th>
              <th className="text-slate-600 font-medium">销量</th>
              <th className="text-slate-600 font-medium">状态</th>
              <th className="text-slate-600 font-medium">创建时间</th>
              <th className="text-slate-600 font-medium">操作</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50">
                <td className="text-slate-700">{product.id}</td>
                <td className="text-slate-700 font-medium">{product.name}</td>
                <td className="text-slate-700">{product.category}</td>
                <td className="text-slate-700 font-bold text-primary">¥{product.price.toLocaleString()}</td>
                <td className="text-slate-700">
                  <span className={product.stock === 0 ? 'text-error font-medium' : ''}>
                    {product.stock}
                  </span>
                </td>
                <td className="text-slate-700">{product.sales}</td>
                <td>
                  <ProductStatusBadge status={product.status} />
                </td>
                <td className="text-slate-700">{product.createdAt}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleToggleStatus(product)}
                      className={product.status === 'on' ? 'text-error' : 'text-success'}
                    >
                      {product.status === 'on' ? '下架' : '上架'}
                    </button>
                    <button
                      onClick={() => handleDeleteClick(product.id)}
                      className="text-error hover:text-error/80 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {paginatedProducts.length === 0 && (
          <div className="py-12">
            <p className="text-center text-slate-500">暂无商品数据</p>
          </div>
        )}
      </div>

      {/* 分页 */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 p-4 border-t border-slate-200">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="btn btn-ghost btn-sm"
          >
            上一页
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`btn btn-sm ${currentPage === page ? 'btn-primary' : 'btn-ghost'}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="btn btn-ghost btn-sm"
          >
            下一页
          </button>
        </div>
      )}

      {/* 表单弹窗 */}
      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        product={editingProduct}
      />

      {/* 删除确认弹窗 */}
      <ConfirmModal
        isOpen={deleteConfirmOpen}
        title="确认删除"
        message="确定要删除该商品吗？此操作无法撤销。"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteConfirmOpen(false)}
      />
    </PageContainer>
  );
}
