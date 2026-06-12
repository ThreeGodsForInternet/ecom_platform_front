import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Store, Eye, EyeOff, Loader2, UserPlus } from 'lucide-react';
import { Register } from '../api/auth';

// 表单数据类型
interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  // const { isLoggedIn } = useAuthStore();
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // 使用 React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      phone: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const password = watch('password');

  // 已登录则跳转首页
  // if (isLoggedIn) {
  //   navigate('/', { replace: true });
  //   return null;
  // }

  const onSubmit = async (data: RegisterFormValues) => {
    setError('');
    setSuccess(false);

    try {
      const res = await Register(data);
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body gap-4">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Store size={28} className="text-primary" />
            </div>
            <h1 className="text-xl font-bold">注册米米乐账号</h1>
            <p className="text-sm text-base-content/50">开启您的优质购物体验</p>
          </div>

          {/* 状态提示 */}
          {error && (
            <div className="alert alert-error alert-soft text-sm">
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="alert alert-success alert-soft text-sm">
              <span>注册成功！正在为您跳转到登录页面...</span>
            </div>
          )}

          {/* 注册表单 */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* 用户名字段 */}
            <div className="form-control">
              <div className="label">
                <span className="label-text text-sm font-medium">用户名</span>
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
                className={`input input-bordered w-full ${errors.username ? 'input-error' : ''}`}
                placeholder="设置您的用户名"
                autoFocus
              />
              {errors.username && (
                <div className="label">
                  <span className="label-text-alt text-error">{errors.username.message}</span>
                </div>
              )}
            </div>
            {/* 手机号字段 */}
            <div className="form-control">
              <div className="label">
                <span className="label-text text-sm font-medium">手机号</span>
              </div>
              <input
                type="text"
                {...register('phone', {
                  required: '请输入手机号',
                  pattern: {
                    value: /^[13-9]\d{10}$/,
                    message: '请输入有效的手机号',
                  },
                })}
                className={`input input-bordered w-full ${errors.phone ? 'input-error' : ''}`}
                placeholder="请输入手机号"
              />
              {errors.phone && (
                <div className="label">
                  <span className="label-text-alt text-error">{errors.phone.message}</span>
                </div>
              )}
            </div>
            {/* 邮箱字段 */}
            <div className="form-control">
              <div className="label">
                <span className="label-text text-sm font-medium">电子邮箱</span>
              </div>
              <input
                type="email"
                {...register('email', {
                  required: '请输入电子邮箱',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '请输入有效的邮箱地址',
                  },
                })}
                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                placeholder="example@mail.com"
              />
              {errors.email && (
                <div className="label">
                  <span className="label-text-alt text-error">{errors.email.message}</span>
                </div>
              )}
            </div>

            {/* 密码字段 */}
            <div className="form-control">
              <div className="label">
                <span className="label-text text-sm font-medium">密码</span>
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
                  placeholder="设置您的登录密码"
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

            {/* 确认密码字段 */}
            <div className="form-control">
              <div className="label">
                <span className="label-text text-sm font-medium">确认密码</span>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPwd ? 'text' : 'password'}
                  {...register('confirmPassword', {
                    required: '请再次输入密码',
                    validate: (value) => value === password || '两次输入的密码不一致',
                  })}
                  className={`input input-bordered w-full pr-10 ${
                    errors.confirmPassword ? 'input-error' : ''
                  }`}
                  placeholder="请再次输入密码以确认"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-base-content"
                  onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                >
                  {showConfirmPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="label">
                  <span className="label-text-alt text-error">
                    {errors.confirmPassword.message}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting || success}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> 正在提交...
                  </>
                ) : (
                  <>
                    <UserPlus size={18} /> 立即注册
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-base-content/40 mt-2">
            已有账号？
            <Link to="/login" className="text-primary cursor-pointer hover:underline ml-1">
              直接登录
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
