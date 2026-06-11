import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Store, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Login } from '../api/auth';
import { setToken } from '../utils/Token';
import { authStore } from '../stores/authAInfoStore';
// 表单数据类型
interface LoginFormValues {
  username: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');
  const setAuthInfo = authStore((s) => s.setAuthInfo);
  // 一次性取出状态和更新方法
  // const { authInfo, setAuthInfo } = authStore((state) => ({
  //   authInfo: state.authInfo,
  //   setAuthInfo: state.setAuthInfo,
  // }));
  // 使用 React Hook Form - register() 更适合原生组件
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError('');

    try {
      const res = await Login(data);
      console.log(res);
      //  个人信息的保存到全局仓库同时也保存到本地存储 -- 读取token到本地存储
      if (res.data) {
        const { token } = res.data;
        setToken(token);
        setAuthInfo(res.data);
        navigate('/', { replace: true });
      } else {
        setError('登录失败，请检查用户名和密码');
      }
    } catch (error) {
      const err = error as any;
      setError(err?.response?.data?.message || '登录过程发生错误，请重试');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body gap-4">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Store size={28} className="text-primary" />
            </div>
            <h1 className="text-xl font-bold">登录米米乐综合商城</h1>
            <p className="text-sm text-base-content/50">综合线上购物平台</p>
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="alert alert-error alert-soft text-sm">
              <span>{error}</span>
            </div>
          )}

          {/* 登录表单 */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* 用户名字段 - 使用 register() */}
            <div className="form-control ">
              <div className="label ">
                <span className="label-text text-sm">用户名</span>
              </div>
              <input
                type="text"
                {...register('username', {
                  required: '请输入用户名',
                  minLength: {
                    value: 3,
                    message: '用户名至少 3 个字符',
                  },
                })}
                className={`input input-bordered  w-full ${errors.username ? 'input-error' : ''}`}
                placeholder="请输入用户名"
                autoFocus
                onChange={(e) => {
                  // 保持 register() 的 onChange 同时清空 error
                  const nativeEvent = e.target;
                  setError('');
                }}
              />
              {errors.username && (
                <div className="label">
                  <span className="label-text-alt text-error">{errors.username.message}</span>
                </div>
              )}
            </div>

            {/* 密码字段 - 使用 register() */}
            <div className="">
              <div className="label">
                <span className="label-text text-sm">密码</span>
              </div>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  {...register('password', {
                    required: '请输入密码',
                    minLength: {
                      value: 6,
                      message: '密码至少 6 个字符',
                    },
                  })}
                  className={`input input-bordered w-full pr-10 ${
                    errors.password ? 'input-error' : ''
                  }`}
                  placeholder="请输入密码"
                  onChange={(e) => {
                    setError('');
                  }}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-base-content"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <div className="label">
                  <span className="label-text-alt text-error">{errors.password.message}</span>
                </div>
              )}
            </div>

            <div className="label justify-end">
              <span className="label-text-alt text-primary cursor-pointer hover:underline">
                忘记密码？
              </span>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> 登录中...
                </>
              ) : (
                '登录'
              )}
            </button>
          </form>

          {/* 底部提示 */}
          <div className="divider text-xs text-base-content/30">其他方式</div>
          <div className="flex justify-center gap-3">
            <button className="btn btn-outline btn-sm btn-circle" title="微信登录">
              💬
            </button>
            <button className="btn btn-outline btn-sm btn-circle" title="支付宝登录">
              💳
            </button>
            <button className="btn btn-outline btn-sm btn-circle" title="手机验证码登录">
              📱
            </button>
          </div>

          <p className="text-center text-xs text-base-content/40 mt-2">
            还没有账号？
            <Link to="/register" className="text-primary cursor-pointer hover:underline ml-1">
              立即注册
            </Link>
          </p>

          {/* 回到首页 */}
          <Link to="/" className="btn btn-ghost btn-sm text-base-content/40 mx-auto">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
