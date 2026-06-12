/** 通用 API 响应结构 */
export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

// ==================== 数据模型 ====================

/** 用户 */
export interface User {
  id?: number
  username?: string
  phone?: string
  email?: string
  password?: string
  nickname?: string
  avatar?: string
  status?: number // 0正常 1禁用
  isAnonymous?: number // 0否 1是
  createTime?: string
  updateTime?: string
  isDelete?: number // 0否 1是
}

/** 商品 */
export interface Product {
  id?: number
  categoryId?: number
  name?: string // 商品名称
  subtitle?: string // 副标题
  image?: string // 主图
  price?: number // 售价
  marketPrice?: number // 市场价
  stock?: number // 库存
  sales?: number // 销量
  sort?: number
  isHot?: number // 是否热卖
  isNew?: number // 是否新品
  isSale?: number // 是否特卖
  status?: number // 0上架 1下架
  createTime?: string
}

/** 用户地址 */
export interface UserAddress {
  id?: number
  userId?: number
  receiverName?: string // 收货人姓名
  receiverPhone?: string // 收货人手机号
  province?: string // 省
  city?: string // 市
  area?: string // 区
  address?: string // 详细地址
  isDefault?: number // 0否 1是
  createTime?: string
  updateTime?: string
  isDelete?: number // 0否 1是
}

/** 商品分类 */
export interface ProductCategory {
  id?: number
  name?: string // 分类名称
  parentId?: number // 父级分类ID 0为顶级分类
  sort?: number
  status?: number // 0正常 1禁用
}

/** 订单明细 */
export interface OrderItem {
  id?: number
  orderId?: number
  productId?: number
  productName?: string
  price?: number // 单价
  num?: number // 数量
  totalPrice?: number // 小计
}

/** 优惠券 */
export interface Coupon {
  id?: number
  name?: string // 优惠券名称
  type?: number // 1满减券 2折扣券
  conditionAmount?: number // 满减门槛金额
  discountAmount?: number // 优惠金额
  startTime?: string
  endTime?: string
  status?: number // 0正常 1禁用
  createTime?: string
}

/** 订单 */
export interface Order {
  id?: number
  orderNo?: string // 订单编号
  userId?: number
  addressId?: number
  orderAmount?: number // 订单金额
  payAmount?: number // 实付金额
  payType?: number // 支付方式
  payTime?: string
  deliveryType?: number // 配送方式
  status?: number // 订单状态
  createTime?: string
}

// ==================== 请求参数 ====================

/** 登录请求 */
export interface LoginRequest {
  username: string
  password: string
}

/** 注册请求 */
export interface RegisterRequest {
  username: string
  password: string
  phone?: string
  email?: string
  nickname?: string
}

/** 登录/注册响应 data */
export interface LoginResponse {
  token: string
  username: string
  nickname: string
  role: string
}
