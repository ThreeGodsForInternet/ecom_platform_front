import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { getToken, removeToken } from './Token';
// 定义响应数据类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

// 创建 axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const { code, message } = response.data;
    if (message === 'success' || code === 200) {
      return response;
    } else {
      // 统一错误提示
      console.error('响应错误:', message);

      // 处理常见业务错误码
      switch (code) {
        case 401:
          // 业务状态码 401：token 无效或过期
          removeToken();
          window.location.href = '/login';
          break;
        case 403:
          console.error('没有权限访问');
          break;
        case 404:
          console.error('请求的资源不存在');
          break;
        case 500:
          console.error('服务器内部错误');
          break;
        default:
          console.error(message || '请求失败');
      }

      return Promise.reject(new Error(message || '请求失败'));
    }
  },
  (error) => {
    // 处理 HTTP 状态码错误
    if (error.response) {
      const httpStatus = error.response.status;
      switch (httpStatus) {
        case 401:
          // HTTP 401：未授权
          removeToken();
          break;
        case 403:
          console.error('没有权限访问该资源');
          break;
        case 404:
          console.error('接口不存在');
          break;
        case 500:
          console.error('服务器内部错误，请稍后重试');
          break;
        default:
          console.error(`请求失败: ${error.response.data?.message || error.message}`);
      }
    }
    // 网络错误或超时等处理
    else if (error.message.includes('timeout')) {
      console.error('请求超时，请稍后重试');
    } else if (error.message.includes('Network')) {
      console.error('网络异常，请检查网络连接');
    } else {
      console.error('请求失败:', error.message);
    }
    return Promise.reject(error);
  }
);

// 封装请求方法
const request = {
  // GET 请求
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return instance.get(url, config).then((res) => res.data);
  },

  // POST 请求
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return instance.post(url, data, config).then((res) => res.data);
  },

  // PUT 请求
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return instance.put(url, data, config).then((res) => res.data);
  },

  // DELETE 请求
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return instance.delete(url, config).then((res) => res.data);
  },

  // PATCH 请求
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return instance.patch(url, data, config).then((res) => res.data);
  },
};

export default request;
