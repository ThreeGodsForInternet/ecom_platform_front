import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Store, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuthStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 已登录则跳转首页
  if (isLoggedIn) {
    navigate('/', { replace: true });
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('请输入用户名');
      return;
    }
    if (!password.trim()) {
      setError('请输入密码');
      return;
    }

    setLoading(true);
    const success = await login(username, password);
    setLoading(false);

    if (success) {
      navigate('/', { replace: true });
    } else {
      setError('登录失败，请检查用户名和密码');
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
            <h1 className="text-xl font-bold">登录云商优选</h1>
            <p className="text-sm text-base-content/50">综合线上购物平台</p>
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="alert alert-error alert-soft text-sm">
              <span>{error}</span>
            </div>
          )}

          {/* 登录表单 */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">用户名</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="请输入用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text text-sm">密码</span>
              </div>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  className="input input-bordered w-full pr-10"
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/30 hover:text-base-content"
                  onClick={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>

            <div className="label justify-end">
              <span className="label-text-alt text-primary cursor-pointer hover:underline">
                忘记密码？
              </span>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
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
            <span className="text-primary cursor-pointer hover:underline ml-1">
              立即注册
            </span>
          </p>

          {/* 回到首页 */}
          <Link
            to="/"
            className="btn btn-ghost btn-sm text-base-content/40 mx-auto"
          >
            返回首页
          </Link>

          {/* 提示 */}
          <div className="alert alert-soft text-xs text-base-content/60">
            <span>💡 模拟登录：输入任意用户名和密码即可登录</span>
          </div>
        </div>
      </div>
    </div>
  );
}
