/**
 * 优惠券Controller
 * GET    /coupon/list        优惠券列表
 * POST   /coupon/add         新增优惠券
 * PUT    /coupon/update      更新优惠券
 * DELETE /coupon/delete/{id} 删除优惠券
 */
import request from '../utils/request'
import type { ApiResponse, Coupon } from './types'

const { get, post, put, delete: del } = request

/** 获取优惠券列表 */
export const getCouponList = () => {
  return get<ApiResponse<Coupon[]>>('/coupon/list')
}

/** 新增优惠券 */
export const addCoupon = (data: Coupon) => {
  return post<ApiResponse<string>>('/coupon/add', data)
}

/** 更新优惠券 */
export const updateCoupon = (data: Coupon) => {
  return put<ApiResponse<string>>('/coupon/update', data)
}

/** 删除优惠券 */
export const deleteCoupon = (id: number) => {
  return del<ApiResponse<string>>(`/coupon/delete/${id}`)
}
