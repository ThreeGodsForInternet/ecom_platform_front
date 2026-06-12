import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
  Edit,
  Trash2,
} from 'lucide-react';

// 模拟商品数据类型
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  status: 'active' | 'inactive';
}

// 模拟数据
const mockProducts: Product[] = [
  { id: '1', name: 'iPhone 15 Pro', category: '手机数码', price: 8999, stock: 150, sales: 2300, status: 'active' },
  { id: '2', name: 'MacBook Air M3', category: '电脑办公', price: 8999, stock: 80, sales: 560, status: 'active' },
  { id: '3', name: 'AirPods Pro 2', category: '手机数码', price: 1899, stock: 300, sales: 4500, status: 'active' },
  { id: '4', name: '华为 Mate 60', category: '手机数码', price: 6999, stock: 0, sales: 1200, status: 'inactive' },
  { id: '5', name: 'iPad Pro 12.9', category: '电脑办公', price: 8999, stock: 120, sales: 890, status: 'active' },
  { id: '6', name: 'Apple Watch 9', category: '手机数码', price: 2999, stock: 200, sales: 1500, status: 'active' },
  { id: '7', name: '小米 14 Ultra', category: '手机数码', price: 5999, stock: 180, sales: 3200, status: 'active' },
  { id: '8', name: '戴森吹风机', category: '家用电器', price: 2990, stock: 95, sales: 680, status: 'active' },
  { id: '9', name: '戴森吸尘器V15', category: '家用电器', price: 4990, stock: 60, sales: 420, status: 'inactive' },
  { id: '10', name: 'SK-II神仙水230ml', category: '美妆个护', price: 1540, stock: 250, sales: 2800, status: 'active' },
];

export default function ProductTableExample() {
  const [data] = useState<Product[]>(mockProducts);

  // 定义表格列
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      size: 80,
    },
    {
      header: ({ column }) => (
        <div
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => column.toggleSorting()}
        >
          商品名称
          <ArrowUpDown size={14} />
        </div>
      ),
      accessorKey: 'name',
    },
    {
      header: ({ column }) => (
        <div
          className="flex items-center gap-1 cursor-pointer select-none"
          onClick={() => column.toggleSorting()}
        >
          分类
          <ArrowUpDown size={14} />
        </div>
      ),
      accessorKey: 'category',
    },
    {
      header: ({ column }) => (
        <div
          className="flex items-center gap-1 cursor-pointer select-none justify-end"
          onClick={() => column.toggleSorting()}
        >
          价格
          <ArrowUpDown size={14} />
        </div>
      ),
      accessorKey: 'price',
      cell: ({ getValue }) => `¥${getValue<number>().toLocaleString()}`,
      meta: { align: 'right' },
    },
    {
      header: ({ column }) => (
        <div
          className="flex items-center gap-1 cursor-pointer select-none justify-end"
          onClick={() => column.toggleSorting()}
        >
          库存
          <ArrowUpDown size={14} />
        </div>
      ),
      accessorKey: 'stock',
      cell: ({ getValue }) => getValue<number>(),
      meta: { align: 'right' },
    },
    {
      header: ({ column }) => (
        <div
          className="flex items-center gap-1 cursor-pointer select-none justify-end"
          onClick={() => column.toggleSorting()}
        >
          销量
          <ArrowUpDown size={14} />
        </div>
      ),
      accessorKey: 'sales',
      cell: ({ getValue }) => getValue<number>(),
      meta: { align: 'right' },
    },
    {
      header: '状态',
      accessorKey: 'status',
      cell: ({ getValue }) => {
        const status = getValue<'active' | 'inactive'>();
        return (
          <span
            className={`badge ${
              status === 'active' ? 'badge-success' : 'badge-error'
            }`}
          >
            {status === 'active' ? '上架' : '下架'}
          </span>
        );
      },
    },
    {
      header: '操作',
      id: 'actions',
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-xs text-primary">
            <Edit size={14} />
          </button>
          <button className="btn btn-ghost btn-xs text-error">
            <Trash2 size={14} />
          </button>
        </div>
      ),
    },
  ];

  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">商品管理</h1>
        <p className="text-slate-500">示例：使用 TanStack Table</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* 表格顶部操作栏 */}
        <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="搜索商品..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary w-full"
            />
          </div>
          <button className="btn btn-primary flex items-center gap-2">
            <Plus size={16} />
            添加商品
          </button>
        </div>

        {/* 表格 */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-slate-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{
                        width: header.getSize() !== 150 ? header.getSize() : undefined,
                      }}
                      className={header.column.columnDef.meta?.align === 'right' ? 'text-right' : ''}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={cell.column.columnDef.meta?.align === 'right' ? 'text-right' : ''}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 分页控制 */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            显示 {table.getState().pagination.pageIndex * 5 + 1} - {Math.min((table.getState().pagination.pageIndex + 1) * 5, table.getFilteredRowModel().rows.length)} 条，共 {table.getFilteredRowModel().rows.length} 条
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft size={16} />
              上一页
            </button>
            <span className="text-sm">
              第 {table.getState().pagination.pageIndex + 1} / {table.getPageCount()} 页
            </span>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              下一页
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}