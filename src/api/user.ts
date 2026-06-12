/**
 * UserController - 用户接口
 * GET  /user/list  用户列表
 * POST /user/add   新增用户
 */
import request from '../utils/request'
import type { ApiResponse, User } from './types'

const { get, post } = request

/** 获取用户列表 */
export const getUserList = () => {
  return get<ApiResponse<User[]>>('/user/list')
}

/** 新增用户 */
export const addUser = (data: User) => {
  return post<ApiResponse<string>>('/user/add', data)
}
