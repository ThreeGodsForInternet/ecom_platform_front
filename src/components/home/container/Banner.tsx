import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockBanners } from '../../../mockdata/mockBanners';

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % mockBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-base-100 rounded-2xl overflow-hidden">
      {/* 轮播横幅 */}
      <div className="carousel w-full h-48 sm:h-64 md:h-80">
        {/* 利用盒子坍塌 - dispaly 切换  */}
        {mockBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`carousel-item relative w-full bg-gradient-to-r ${banner.bgColor}`}
            style={{ display: index === currentBanner ? 'block' : 'none' }}
          >
            <div className="flex flex-col items-center justify-center w-full h-full text-white px-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {banner.title}
              </h2>
              <p className="text-sm sm:text-base opacity-90 mb-4">{banner.subtitle}</p>
              <Link to={banner.link} className="btn btn-sm md:btn-md glass text-white">
                立即抢购
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* 轮播指示器 */}
      <div className="flex justify-center gap-2 py-3 bg-base-100">
        {mockBanners.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentBanner ? 'bg-primary w-5' : 'bg-base-300'
            }`}
            onClick={() => setCurrentBanner(i)}
          />
        ))}
      </div>
    </div>
  );
}
