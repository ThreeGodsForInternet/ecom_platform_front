/**
 * Token 本地存储工具类
 * 基于 localStorage 封装
 */

// 定义存储键名，统一管理，避免硬编码
const TOKEN_KEY = 'shop_token';
// 可选：存储过期时间键名（如需过期校验）
const TOKEN_EXPIRE_KEY = 'shop_token_expire';

/**
 * 保存 Token
 * @param token 令牌字符串
 * @param expire 过期时间戳(毫秒)，可选
 */
export function setToken(token: string, expire?: number): void {
  if (!token) return;
  localStorage.setItem(TOKEN_KEY, token);
  // 有过期时间则一并存储
  if (expire) {
    localStorage.setItem(TOKEN_EXPIRE_KEY, String(expire));
  }
}

/**
 * 获取 Token
 * 自动校验是否过期
 * @returns token | null
 */
export function getToken(): string | null {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return null;

  // 校验过期逻辑
  const expireStr = localStorage.getItem(TOKEN_EXPIRE_KEY);
  if (expireStr) {
    const expire = Number(expireStr);
    const now = Date.now();
    // 已过期，清空并返回 null
    if (now > expire) {
      removeToken();
      return null;
    }
  }

  return token;
}

/**
 * 删除 Token（退出登录/清空登录态）
 */
export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRE_KEY);
}

/**
 * 判断是否存在有效 Token（是否已登录）
 * @returns boolean
 */
export function hasToken(): boolean {
  return !!getToken();
}
