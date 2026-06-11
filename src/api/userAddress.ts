/**
 * 用户地址Controller
 * GET    /user-address/list        地址列表
 * POST   /user-address/add         新增地址
 * PUT    /user-address/update      更新地址
 * DELETE /user-address/delete/{id} 删除地址
 */
import request from '../utils/request'
import type { UserAddress } from './types'

const { get, post, put, delete: del } = request

/** 获取用户地址列表 */
export const getUserAddressList = () => {
  return get<UserAddress[]>('/user-address/list')
}

/** 新增用户地址 */
export const addUserAddress = (data: UserAddress) => {
  return post<string>('/user-address/add', data)
}

/** 更新用户地址 */
export const updateUserAddress = (data: UserAddress) => {
  return put<string>('/user-address/update', data)
}

/** 删除用户地址 */
export const deleteUserAddress = (id: number) => {
  return del<string>(`/user-address/delete/${id}`)
}
