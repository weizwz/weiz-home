import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect, useRef } from "react";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

interface RecommendedProps {
  title?: string;
  subtitle?: string;
}

export function Recommended({
  title = "推荐项目",
  subtitle = "看看我做了哪些有趣的项目",
}: RecommendedProps) {
  const products: Product[] = [
    {
      id: 1,
      title: "构建具有AI优势的，",
      subtitle: "先进网站。",
      description: "进一步了解 HeoBlog →",
      image: "https://p.weizwz.com/siteshot_note.webp",
      imageAlt: "网站设计展示",
      link: "https://note.weizwz.com/",
    },
    {
      id: 2,
      title: "烦恼来了，",
      subtitle: "通通解决。",
      description: "进一步了解 敲木鱼 →",
      image: "https://p.weizwz.com/siteshot_note.webp",
      imageAlt: "手机和手表应用展示",
      link: "https://note.weizwz.com/",
    },
    {
      id: 3,
      title: "分享设计，",
      subtitle: "与我的科技生活。",
      description: "进一步了解 HeoBlog →",
      image: "https://p.weizwz.com/siteshot_note.webp",
      imageAlt: "博客网站展示",
      link: "https://note.weizwz.com/",
    },
    {
      id: 4,
      title: "分享设计，",
      subtitle: "与我的科技生活。",
      description: "进一步了解 HeoBlog →",
      image: "https://p.weizwz.com/siteshot_note.webp",
      imageAlt: "博客网站展示",
      link: "https://note.weizwz.com/",
    },
    {
      id: 5,
      title: "分享设计，",
      subtitle: "与我的科技生活。",
      description: "进一步了解 HeoBlog →",
      image: "https://p.weizwz.com/siteshot_note.webp",
      imageAlt: "博客网站展示",
      link: "https://note.weizwz.com/",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 检测是否为移动设备
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // 计算PC端的最大滑动位置
  const maxSlidePC = Math.max(0, products.length - 3);

  const nextSlide = () => {
    if (isMobile) {
      // 移动端：一次滚动一个模块
      setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    } else {
      // PC端：一次滚动三个模块，但不超过最大位置
      setCurrentSlide((prev) => {
        const next = prev + 3;
        // 如果下一个位置超过了最大位置，就直接跳到最大位置
        // 如果已经在最大位置，就回到起点
        return prev >= maxSlidePC ? 0 : Math.min(next, maxSlidePC);
      });
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      // 移动端：一次滚动一个模块
      setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    } else {
      // PC端：一次滚动三个模块
      setCurrentSlide((prev) => {
        // 如果当前是第一页，就跳到最后一页
        if (prev === 0) {
          return maxSlidePC;
        }
        // 否则向前滚动三个位置，但不小于0
        return Math.max(0, prev - 3);
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // 向左滑动
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      // 向右滑动
      prevSlide();
    }
  };

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, products.length]);

  return (
    <section id="recommend" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-500 text-center mb-12">{subtitle}</p>

        <div className="relative">
          <div
            className="overflow-hidden pb-10"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: isMobile
                  ? `translateX(-${currentSlide * 100}%)`
                  : `translateX(-${currentSlide * 33.33}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`${
                    isMobile ? "w-full" : "w-1/3"
                  } flex-shrink-0 px-3`}
                >
                  <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md h-full hover:shadow-xl transition-shadow duration-300">
                    <div>
                      <h3 className="text-xl text-center font-bold mb-1">
                        {product.title}
                      </h3>
                      <h3 className="text-xl text-center font-bold mb-4">
                        {product.subtitle}
                      </h3>
                      <a
                        href={product.link}
                        className="text-blue-500 hover:text-blue-700 transition-colors flex items-center justify-center"
                      >
                        <span>{product.description}</span>
                      </a>
                    </div>
                    <div className="mt-8 bg-gray-800 overflow-hidden rounded-xl border-1 border-gray-100">
                      {/* Mac-style window header */}
                      <div className="p-1 px-2.5 flex items-center">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      {/* Image container */}
                      <div className="overflow-hidden rounded-lg rounded-t-none">
                        {product.link ? (
                          <ScaledIframe src={product.link} />
                        ) : (
                          <img
                            src={product.image}
                            alt={product.imageAlt}
                            className="w-full aspect-video object-cover"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex space-x-4">
              <Button
                icon={<LeftOutlined />}
                shape="circle"
                onClick={prevSlide}
                className="flex items-center justify-center hover:bg-gray-100 transition-colors"
              />
              <Button
                icon={<RightOutlined />}
                shape="circle"
                onClick={nextSlide}
                className="flex items-center justify-center hover:bg-gray-100 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 动态缩放的 iframe 组件
interface ScaledIframeProps {
  src: string;
}

function ScaledIframe({ src }: ScaledIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // 标准桌面尺寸
  const DESKTOP_WIDTH = 1024;
  const DESKTOP_HEIGHT = 768;

  // 计算缩放比例
  const calculateScale = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerWidth = rect.width;
      const containerHeight = rect.height;

      // 计算宽度和高度的缩放比例，取较小的值以确保完整显示
      const scaleX = containerWidth / DESKTOP_WIDTH;
      const scaleY = containerHeight / DESKTOP_HEIGHT;
      const newScale = Math.min(scaleX, scaleY);

      setScale(newScale);
      setContainerSize({ width: containerWidth, height: containerHeight });
    }
  };

  // 监听容器尺寸变化
  useEffect(() => {
    calculateScale();

    const resizeObserver = new ResizeObserver(() => {
      calculateScale();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // 监听窗口大小变化
    const handleResize = () => {
      setTimeout(calculateScale, 100); // 延迟执行以确保布局完成
    };

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-4/3 border-0 rounded-md overflow-hidden relative bg-white"
    >
      <iframe
        className="absolute top-0 left-0 border-0 pointer-events-none"
        src={src}
        style={{
          width: `${DESKTOP_WIDTH}px`,
          height: `${DESKTOP_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        loading="lazy"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  );
}
