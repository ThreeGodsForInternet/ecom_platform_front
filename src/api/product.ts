/**
 * ProductController - 商品接口
 * GET    /product/list        商品列表
 * GET    /product/{id}        根据ID获取商品
 * POST   /product/add         新增商品
 * PUT    /product/update      更新商品
 * DELETE /product/delete/{id} 删除商品
 */
import request from '../utils/request'
import type { ApiResponse, Product } from './types'

const { get, post, put, delete: del } = request

/** 获取商品列表 */
export const getProductList = () => {
  return get<ApiResponse<Product[]>>('/product/list')
}

/** 根据ID获取商品 */
export const getProductById = (id: number) => {
  return get<ApiResponse<Product>>(`/product/${id}`)
}

/** 新增商品 */
export const addProduct = (data: Product) => {
  return post<ApiResponse<string>>('/product/add', data)
}

/** 更新商品 */
export const updateProduct = (data: Product) => {
  return put<ApiResponse<string>>('/product/update', data)
}

/** 删除商品 */
export const deleteProduct = (id: number) => {
  return del<ApiResponse<string>>(`/product/delete/${id}`)
}
