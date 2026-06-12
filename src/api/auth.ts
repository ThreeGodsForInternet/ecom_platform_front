/**
 * AuthController - 认证接口
 * POST /auth/login    登录
 * POST /auth/register  注册
 */
import request from '../utils/request';
import type { LoginRequest, RegisterRequest, LoginResponse } from './types';

const { post } = request;

/** 登录 */
export const Login = (data: LoginRequest) => {
  return post<LoginResponse>('/auth/login', data);
};

/** 注册 */
export const Register = (data: RegisterRequest) => {
  return post<LoginResponse>('/auth/register', data);
};
