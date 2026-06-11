/**
 * API 模块统一导出
 *
 * 使用方式:
 *   import { authApi, userApi, productApi } from '@/api'
 *   // 或
 *   import { login, register } from '@/api/auth'
 */

// 类型定义
export type * from './types'

// 按模块导出
export * as authApi from './auth'
export * as userApi from './user'
export * as productApi from './product'
export * as userAddressApi from './userAddress'
export * as categoryApi from './productCategory'
export * as orderItemApi from './orderItem'
export * as couponApi from './coupon'
export * as orderApi from './order'
