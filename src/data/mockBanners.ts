export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  bgColor: string;
}

export const mockBanners: Banner[] = [
  {
    id: 'b1',
    title: '618年中大促',
    subtitle: '全场低至5折 爆款限时秒杀',
    imageUrl: '',
    link: '/products?tag=618',
    bgColor: 'from-red-500 to-red-700',
  },
  {
    id: 'b2',
    title: '数码新品首发',
    subtitle: '最新旗舰手机 预约享好礼',
    imageUrl: '',
    link: '/products?categoryId=c1',
    bgColor: 'from-blue-500 to-indigo-700',
  },
  {
    id: 'b3',
    title: '夏日清凉节',
    subtitle: '空调冰洗 清凉一夏',
    imageUrl: '',
    link: '/products?categoryId=c3',
    bgColor: 'from-cyan-400 to-teal-600',
  },
];
