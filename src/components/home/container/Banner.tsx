import { useState, useEffect } from 'react';
const imgModules = import.meta.glob('../../../assets/*', { eager: true });
export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const imgList = Object.values(imgModules);
  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % imgList.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-base-100 h-full w-full rounded-2xl overflow-hidden">
      {/* 轮播横幅 */}
      <div className="carousel w-full h-full relative">
        {/* 利用盒子坍塌 - dispaly 切换  */}
        {imgList.map((banner, index) => (
          <img
            key={index}
            src={banner.default}
            style={{ display: index === currentBanner ? 'block' : 'none' }}
            alt="商品图"
            className="w-full h-full object-cover"
          />
        ))}
        <div className="flex justify-center gap-2 py-3 opacity-80 absolute bottom-0 left-0 right-0">
          {imgList.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all position-absolute  ${
                i === currentBanner ? 'bg-primary w-5' : 'bg-base-300'
              }`}
              onClick={() => setCurrentBanner(i)}
            />
          ))}
        </div>
      </div>
      {/* 轮播指示器 */}
    </div>
  );
}
