/**
 * 分类Controller
 * GET    /product-category/list        分类列表
 * POST   /product-category/add         新增分类
 * PUT    /product-category/update      更新分类
 * DELETE /product-category/delete/{id} 删除分类
 */
import request from '../utils/request'
import type { ApiResponse, ProductCategory } from './types'

const { get, post, put, delete: del } = request

/** 获取分类列表 */
export const getCategoryList = () => {
  return get<ApiResponse<ProductCategory[]>>('/product-category/list')
}

/** 新增分类 */
export const addCategory = (data: ProductCategory) => {
  return post<ApiResponse<string>>('/product-category/add', data)
}

/** 更新分类 */
export const updateCategory = (data: ProductCategory) => {
  return put<ApiResponse<string>>('/product-category/update', data)
}

/** 删除分类 */
export const deleteCategory = (id: number) => {
  return del<ApiResponse<string>>(`/product-category/delete/${id}`)
}
