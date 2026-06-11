/**
 * AuthController - 认证接口
 * POST /auth/login    登录
 * POST /auth/register  注册
 */
import request from '../utils/request'
import type { ApiResponse, LoginRequest, RegisterRequest, LoginResponse } from './types'

const { post } = request

/** 登录 */
export const login = (data: LoginRequest) => {
  return post<ApiResponse<LoginResponse>>('/auth/login', data)
}

/** 注册 */
export const register = (data: RegisterRequest) => {
  return post<ApiResponse<LoginResponse>>('/auth/register', data)
}
