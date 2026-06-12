/**
 * 订单明细Controller
 * GET    /order-item/list        订单明细列表
 * POST   /order-item/add         新增订单明细
 * PUT    /order-item/update      更新订单明细
 * DELETE /order-item/delete/{id} 删除订单明细
 */
import request from '../utils/request'
import type { ApiResponse, OrderItem } from './types'

const { get, post, put, delete: del } = request

/** 获取订单明细列表 */
export const getOrderItemList = () => {
  return get<ApiResponse<OrderItem[]>>('/order-item/list')
}

/** 新增订单明细 */
export const addOrderItem = (data: OrderItem) => {
  return post<ApiResponse<string>>('/order-item/add', data)
}

/** 更新订单明细 */
export const updateOrderItem = (data: OrderItem) => {
  return put<ApiResponse<string>>('/order-item/update', data)
}

/** 删除订单明细 */
export const deleteOrderItem = (id: number) => {
  return del<ApiResponse<string>>(`/order-item/delete/${id}`)
}
