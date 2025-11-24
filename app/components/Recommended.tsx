import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Section } from "./common/Section";
import { Card } from "./common/Card";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  border?: Boolean;
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
      title: "唯知笔记",
      subtitle: "探索知识的无限可能",
      description: "进一步了解 →",
      image: "https://p.weizwz.com/siteshot_note.webp",
      imageAlt: "唯知笔记截图展示",
      link: "https://note.weizwz.com/",
    },
    {
      id: 2,
      title: "ThisCover",
      subtitle: "免费、漂亮的封面生成器",
      description: "进一步了解 →",
      image: "https://p.weizwz.com/cover/cover.weizwz.com_8_5_b3d6c714f8bb59de.webp",
      imageAlt: "ThisCover截图展示",
      link: "https://cover.weizwz.com/",
    },
    {
      id: 3,
      title: "味值商城",
      subtitle: "适配多端的移动商城",
      description: "进一步了解 →",
      border: false,
      image: "https://p.weizwz.com/weizshop/weizshop_design_7c5778e27ee7238e.webp",
      imageAlt: "味值商城截图展示",
      link: "https://github.com/weizwz/weiz-shop",
    },
    {
      id: 4,
      title: "资源监控中心",
      subtitle: "信息可视化大屏系统",
      description: "进一步了解 →",
      image: "https://p.weizwz.com/vue3-charts.weizwz.com_8_5_ec7fa3cd203a193d.webp",
      imageAlt: "资源监控中心截图展示",
      link: "https://vue3-charts.weizwz.com/",
    },
    {
      id: 5,
      title: "Recommend",
      subtitle: "漂亮的Hexo博客推荐模块",
      description: "进一步了解 →",
      image: "https://p.weizwz.com/weizwz.com_7a5050486184930b.webp",
      imageAlt: "hexo 博客导航插件",
      link: "https://note.weizwz.com/hexo/extend/hexo-butterfly-recommend",
    },
    {
      id: 6,
      title: "funAnimation",
      subtitle: "有趣的样式和动画",
      description: "进一步了解 →",
      image: "https://p.weizwz.com/animation.weizwz.com_8_5_27b63074250acd5b.webp",
      imageAlt: "资源监控中心截图展示",
      link: "https://animation.weizwz.com/",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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
    // 如果轮播被暂停，则不启动定时器
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, products.length, isPaused]);

  return (
    <Section id="recommend" className="bg-gray-50" maxWidth="max-w-7xl">
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
                  } flex-shrink-0 md:px-3`}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <Card className="p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300">
                    <div>
                      <h3 className="text-xl text-gray-500 text-center font-bold mb-1">
                        {product.subtitle}
                      </h3>
                      <h3 className="text-xl text-center font-bold mb-4">
                        {product.title}
                      </h3>
                      <a
                        href={product.link}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-700 transition-colors flex items-center justify-center"
                      >
                        <span>{product.description}</span>
                      </a>
                    </div>
                    <div className={`mt-8 rounded-xl ${product.border === false ? '' : 'border-5 border-gray-800'}`}>
                      {/* Mac-style window header */}
                      <div className="w-full aspect-8/5 rounded-md overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </Card>
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
    </Section>
  );
}


