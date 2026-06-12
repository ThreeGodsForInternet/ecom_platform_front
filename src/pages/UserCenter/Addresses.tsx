import { Plus, Edit, Trash2, MapPin, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { UserAddress } from '../../api/types';
import {
  getUserAddressList,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from '../../api/userAddress';

type AddressFormValues = Pick<
  UserAddress,
  'receiverName' | 'receiverPhone' | 'province' | 'city' | 'area' | 'address'
> & {
  isDefault: boolean;
};

export default function Addresses() {
  const [addresses, setAddresses] = useState<UserAddress[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [actionError, setActionError] = useState('');

  /** 获取地址列表 */
  const fetchAddressList = async () => {
    setLoading(true);
    setFetchError('');
    try {
      const res = await getUserAddressList();
      setAddresses(res.data ?? []);
    } catch {
      setFetchError('获取地址列表失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddressList();
  }, []);

  const setDefault = (id: number) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id ? 1 : 0,
      }))
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddressFormValues>({
    defaultValues: {
      receiverName: '',
      receiverPhone: '',
      province: '',
      city: '',
      area: '',
      address: '',
      isDefault: false,
    },
    mode: 'onChange',
  });

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setActionError('');
    reset();
  };

  /** 新增地址 */
  const onCreate = async (values: AddressFormValues) => {
    setActionError('');
    try {
      const addressData: UserAddress = {
        id: undefined,
        userId: 1,
        receiverName: values.receiverName,
        receiverPhone: values.receiverPhone,
        province: values.province,
        city: values.city,
        area: values.area,
        address: values.address,
        isDefault: values.isDefault ? 1 : 0,
        isDelete: 0,
        createTime: new Date().toISOString(),
      };

      await addUserAddress(addressData);

      // 成功后刷新列表
      await fetchAddressList();
      closeModal();
    } catch (error) {
      setActionError('新增地址失败，请稍后重试');
      console.error('添加地址错误:', error);
    }
  };

  /** 更新地址 */
  const onUpdate = async (values: AddressFormValues) => {
    if (!editingId) return;
    setActionError('');
    try {
      const addressData: UserAddress = {
        id: editingId,
        userId: 1,
        receiverName: values.receiverName,
        receiverPhone: values.receiverPhone,
        province: values.province,
        city: values.city,
        area: values.area,
        address: values.address,
        isDefault: values.isDefault ? 1 : 0,
        isDelete: 0,
        createTime: new Date().toISOString(),
      };

      await updateUserAddress(addressData);

      // 成功后刷新列表
      await fetchAddressList();
      closeModal();
    } catch (error) {
      setActionError('更新地址失败，请稍后重试');
      console.error('更新地址错误:', error);
    }
  };

  /** 删除地址 */
  const onDelete = async (id: number) => {
    if (!window.confirm('确定要删除该地址吗？')) return;

    setActionError('');
    try {
      await deleteUserAddress(id);
      // 成功后刷新列表
      await fetchAddressList();
    } catch (error) {
      setActionError('删除地址失败，请稍后重试');
      console.error('删除地址错误:', error);
    }
  };

  /** 编辑地址 */
  const onEdit = (address: UserAddress) => {
    setEditingId(address.id ?? null);
    reset({
      receiverName: address.receiverName,
      receiverPhone: address.receiverPhone,
      province: address.province,
      city: address.city,
      area: address.area,
      address: address.address,
      isDefault: address.isDefault === 1,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">收货地址</h1>
          <p className="text-slate-500">管理您的收货地址</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary gap-2">
          <Plus size={16} />
          新增地址
        </button>
      </div>

      {/* 地址列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.length === 0 && !loading && (
          <div className="text-center text-slate-500 col-span-full">暂无地址，请添加一个地址</div>
        )}

        {loading && (
          <div className="text-center text-slate-500 col-span-full flex items-center justify-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            加载中...
          </div>
        )}

        {addresses.length !== 0 &&
          addresses.map((address) => (
            <div
              key={address.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-primary/50 transition-colors"
            >
              {address.isDefault === 1 && (
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded mb-3">
                  默认地址
                </span>
              )}
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={20} className="text-slate-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-slate-800">{address.receiverName}</span>
                    <span className="text-slate-600">{address.receiverPhone}</span>
                  </div>
                  <p className="text-slate-600">
                    {[address.province, address.city, address.area, address.address]
                      .filter(Boolean)
                      .join('')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                {address.isDefault !== 1 && (
                  <button
                    onClick={() => setDefault(address.id)}
                    className="text-primary hover:text-primary/80 text-sm transition-colors"
                  >
                    设为默认
                  </button>
                )}
                <button
                  onClick={() => onEdit(address)}
                  className="text-slate-600 hover:text-slate-800 text-sm flex items-center gap-1 transition-colors"
                >
                  <Edit size={14} />
                  编辑
                </button>
                <button
                  onClick={() => onDelete(address.id ?? 0)}
                  className="text-error hover:text-error/80 text-sm flex items-center gap-1 transition-colors"
                >
                  <Trash2 size={14} />
                  删除
                </button>
              </div>
            </div>
          ))}
      </div>

      {isModalOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-xl">
            <h3 className="font-bold text-lg text-slate-800">
              {editingId ? '编辑地址' : '新增地址'}
            </h3>

            {actionError && (
              <div className="alert alert-error mt-4 mb-4">
                <span>{actionError}</span>
              </div>
            )}

            <form
              id="create-address-form"
              onSubmit={handleSubmit(editingId ? onUpdate : onCreate)}
              className="mt-4 space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">收货人</span>
                  </div>
                  <input
                    className={`input input-bordered ${errors.receiverName ? 'input-error' : ''}`}
                    placeholder="请输入收货人姓名"
                    {...register('receiverName', { required: '请输入收货人姓名' })}
                  />
                  {errors.receiverName && (
                    <div className="label">
                      <span className="label-text-alt text-error">
                        {errors.receiverName.message}
                      </span>
                    </div>
                  )}
                </label>

                <label className="form-control">
                  <div className="label">
                    <span className="label-text">手机号</span>
                  </div>
                  <input
                    className={`input input-bordered ${errors.receiverPhone ? 'input-error' : ''}`}
                    placeholder="请输入手机号"
                    {...register('receiverPhone', {
                      required: '请输入手机号',
                      pattern: { value: /^1\d{10}$/, message: '请输入有效的手机号' },
                    })}
                  />
                  {errors.receiverPhone && (
                    <div className="label">
                      <span className="label-text-alt text-error">
                        {errors.receiverPhone.message}
                      </span>
                    </div>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">省</span>
                  </div>
                  <input
                    className={`input input-bordered ${errors.province ? 'input-error' : ''}`}
                    placeholder="如：北京市"
                    {...register('province', { required: '请输入省份' })}
                  />
                  {errors.province && (
                    <div className="label">
                      <span className="label-text-alt text-error">{errors.province.message}</span>
                    </div>
                  )}
                </label>

                <label className="form-control">
                  <div className="label">
                    <span className="label-text">市</span>
                  </div>
                  <input
                    className={`input input-bordered ${errors.city ? 'input-error' : ''}`}
                    placeholder="如：北京市"
                    {...register('city', { required: '请输入城市' })}
                  />
                  {errors.city && (
                    <div className="label">
                      <span className="label-text-alt text-error">{errors.city.message}</span>
                    </div>
                  )}
                </label>

                <label className="form-control">
                  <div className="label">
                    <span className="label-text">区</span>
                  </div>
                  <input
                    className={`input input-bordered ${errors.area ? 'input-error' : ''}`}
                    placeholder="如：朝阳区"
                    {...register('area', { required: '请输入区/县' })}
                  />
                  {errors.area && (
                    <div className="label">
                      <span className="label-text-alt text-error">{errors.area.message}</span>
                    </div>
                  )}
                </label>
              </div>

              <div className="form-control mt-5">
                <div className="label mr-4">
                  <span className="label-text">详细地址</span>
                </div>
                <input
                  className={`input input-bordered ${errors.address ? 'input-error' : ''}`}
                  placeholder="街道/门牌号/楼层/房间号"
                  {...register('address', { required: '请输入详细地址' })}
                />
                {errors.address && (
                  <div className="label">
                    <span className="label-text-alt text-error">{errors.address.message}</span>
                  </div>
                )}
              </div>

              <div className="label cursor-pointer justify-start gap-3 pt-5">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  {...register('isDefault')}
                />
                <span className="label-text">设为默认地址</span>
              </div>
            </form>

            <div className="modal-action">
              <button type="button" className="btn" onClick={closeModal} disabled={isSubmitting}>
                取消
              </button>
              <button
                type="submit"
                form="create-address-form"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                保存
              </button>
            </div>
          </div>

          <div className="modal-backdrop">
            <button type="button" onClick={closeModal}>
              close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}
