/**
 * 订单Controller
 * GET    /order/list        订单列表
 * POST   /order/add         新增订单
 * PUT    /order/update      更新订单
 * DELETE /order/delete/{id} 删除订单
 */
import request from '../utils/request'
import type { ApiResponse, Order } from './types'

const { get, post, put, delete: del } = request

/** 获取订单列表 */
export const getOrderList = () => {
  return get<ApiResponse<Order[]>>('/order/list')
}

/** 新增订单 */
export const addOrder = (data: Order) => {
  return post<ApiResponse<string>>('/order/add', data)
}

/** 更新订单 */
export const updateOrder = (data: Order) => {
  return put<ApiResponse<string>>('/order/update', data)
}

/** 删除订单 */
export const deleteOrder = (id: number) => {
  return del<ApiResponse<string>>(`/order/delete/${id}`)
}
