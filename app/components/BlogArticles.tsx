import { Button } from "antd";
import { LeftOutlined, RightOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

interface Article {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  link: string;
  gradient: string;
  icon: string;
}

interface BlogArticlesProps {
  title?: string;
  subtitle?: string;
}

export function BlogArticles({
  title = "我的文章",
  subtitle = "来自博客的最新动态，发现更多精彩内容",
}: BlogArticlesProps) {
  const articles: Article[] = [
    {
      id: 1,
      title: "PS证件照",
      category: "图像处理",
      description: "本文介绍了一种使用Photoshop快速替换证件照背景的方法，且替换效果自然无杂色和毛边",
      date: "2025年06月19日",
      link: "https://note.weizwz.com/editor/ps/photo-change-bg",
      gradient: "from-green-500 to-teal-600",
      icon: "https://api.iconify.design/devicon-plain:photoshop.svg?color=%23fff",
    },
    {
      id: 2,
      title: "VitePress评论",
      category: "建站资源",
      description: "本文介绍了在VitePress中集成Twikoo的方法，包括安装Twikoo插件、封装Twikoo组件、利用布局插槽插入评论模块以及自定义样式等步骤",
      date: "2025年05月15日",
      link: "https://note.weizwz.com/vitepress/extend/vitepress-twikoo",
      gradient: "from-cyan-400 to-purple-600",
      icon: "https://api.iconify.design/simple-icons:vitepress.svg?color=%23fff",
    },
    {
      id: 3,
      title: "MacOS优化",
      category: "系统优化",
      description: "本文介绍了 MacOS Sequoia 系统的基础优化设置，包括修改截屏保存位置、修复启动图标错乱等",
      date: "2025年04月26日",
      link: "https://note.weizwz.com/macos/setting/base-init",
      gradient: "from-sky-300 to-blue-500",
      icon: "https://api.iconify.design/streamline-logos:mac-finder-logo-solid.svg?color=%23fff",
    },
    {
      id: 4,
      title: "图标资源",
      category: "资源分享",
      description: "本文整理了多款常用图标资源，包括 Font Awesome、Iconfont、Iconify Design、Material Icons、CSS*GG、Remix Icon 等",
      date: "2025年04月18日",
      link: "https://note.weizwz.com/resource/image/icon-all",
      gradient: "from-rose-300 to-red-400",
      icon: "https://api.iconify.design/pepicons-print:circle-big-filled.svg?color=%23fff",
    },
    {
      id: 5,
      title: "VitePress建站",
      category: "建站资源",
      description: "本文汇总了使用 VitePress 搭建博客的资源与配置方法",
      date: "2025年04月18日",
      link: "https://note.weizwz.com/vitepress/all/resource-all",
      gradient: "from-cyan-400 to-purple-600",
      icon: "https://api.iconify.design/simple-icons:vitepress.svg?color=%23fff",
    },
    {
      id: 6,
      title: "VSCode AI编程",
      category: "开发工具",
      description: "本文介绍了如何在 VSCode 中接入 DeepSeek V3，包括插件安装、API Key 注册与配置、常用功能操作等步骤",
      date: "2025年01月03日",
      link: "https://note.weizwz.com/editor/vscode/vscode-deepseek",
      gradient: "from-sky-500 to-sky-600",
      icon: "https://api.iconify.design/akar-icons:vscode-fill.svg?color=%23fff",
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
  const maxSlidePC = Math.max(0, articles.length - 3);

  const nextSlide = () => {
    if (isMobile) {
      // 移动端：一次滚动一个模块
      setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
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
      setCurrentSlide((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
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
    }, 6000); // 文章轮播稍慢一些

    return () => clearInterval(interval);
  }, [currentSlide, articles.length, isPaused]);

  return (
    <section id="article" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 px-4">{title}</h2>
        <p className="text-gray-500 text-center mb-8 md:mb-12 text-sm md:text-base px-4">{subtitle}</p>

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
              {articles.map((article) => (
                <div
                  key={article.id}
                  className={`${
                    isMobile ? "w-full" : "w-1/3"
                  } flex-shrink-0 md:px-3`}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border-1 border-slate-200 shadow-md shadow-slate-200 h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* 文章头部 - 渐变背景 */}
                    <div
                      className={`bg-gradient-to-br ${article.gradient} p-6 relative`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                        <img src={article.icon} className="w-10 h-10" alt="icon" />
                      </div>
                      <h3 className="text-4xl text-center font-bold text-white mb-4">
                        {article.title}
                      </h3>
                    </div>

                    {/* 文章内容 */}
                    <div className="p-4 md:p-6">
                      <p className="leading-relaxed mb-3 md:mb-4 line-clamp-2 text-sm md:text-base">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-500">
                          {article.date}
                        </span>

                        <Button
                          type="primary"
                          shape="round"
                          icon={<DoubleRightOutlined />}
                          href={article.link}
                          target="_blank"
                        >
                          阅读全文
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-center">
            <div className="flex space-x-4">
              <Button
                icon={<LeftOutlined />}
                shape="circle"
                onClick={prevSlide}
                className="flex items-center justify-center border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-colors"
              />
              <Button
                icon={<RightOutlined />}
                shape="circle"
                onClick={nextSlide}
                className="flex items-center justify-center border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
