import { Avatar, Button, Drawer } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  MenuOutlined,
  ReadOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Recommended } from "./Recommended";
import { BlogArticles } from "./BlogArticles";
import { About } from "./About";
import { ProjectShowcase } from "./ProjectShowcase";
import { useState, useRef, useEffect } from "react";
import { Footer } from "./Footer";

export function PersonalHomepage() {
  // 导航项数据
  const navItems = [
    { title: "推荐", id: "recommend" },
    { title: "媒体", id: "contact" },
    { title: "服务", id: "about" },
    { title: "主题", id: "recommend" },
    { title: "表情", id: "contact" },
    { title: "关于", id: "about" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  // 移动端菜单状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // 处理鼠标进入导航项
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  // 处理鼠标离开导航区域
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // 更新指示器样式
  useEffect(() => {
    if (activeIndex !== null && navRef.current) {
      const elements = navRef.current.querySelectorAll(".nav-item");
      if (elements[activeIndex]) {
        const item = elements[activeIndex];
        const rect = item.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();

        setIndicatorStyle({
          width: rect.width,
          left: rect.left - navRect.left,
          opacity: 1,
        });
      }
    } else {
      setIndicatorStyle({
        ...indicatorStyle,
        opacity: 0,
      });
    }
  }, [activeIndex]);
  return (
    <div id="home" className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 flex justify-center">
        <div className="bg-white/50 backdrop-blur-sm rounded-full shadow-lg py-3 px-6 flex gap-4 items-center justify-between">
          <div className="flex items-center">
            <Avatar
              size={40}
              src="https://p.weizwz.com/home_bc2e3ce7f2e00827.webp"
              className="cursor-pointer hover:scale-120 duration-300 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.275)]"
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            {isMobile && (
              <span className="ml-2 text-lg font-semibold">weizwz</span>
            )}
          </div>

          {/* 桌面导航 */}
          {!isMobile && (
            <div
              className="flex items-center relative"
              ref={navRef}
              onMouseLeave={handleMouseLeave}
            >
              {/* 滑动背景指示器 */}
              <div
                className="absolute bg-blue-100 border border-blue-500 rounded-full transition-all duration-500"
                style={{
                  width: `${indicatorStyle.width}px`,
                  left: `${indicatorStyle.left}px`,
                  height: "32px",
                  opacity: indicatorStyle.opacity,
                  zIndex: 0,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // 添加回弹效果
                }}
              ></div>

              {/* 导航项 */}
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="px-3 py-1.5 text-gray-700 hover:text-blue-500 relative nav-item cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() =>
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="relative z-10">{item.title}</span>
                </a>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4">
            {/* 移动端汉堡菜单按钮 */}
            {isMobile && (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center justify-center"
              />
            )}

            {/* 博客按钮 */}
            <Button
              type="primary"
              shape="round"
              href="https://note.weizwz.com/"
              target="_blank"
            >
              博客
            </Button>
          </div>
        </div>

        {/* 移动端抽屉菜单 */}
        <Drawer
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          closable={false}
          width={300}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Avatar
                  size={40}
                  src="https://p.weizwz.com/home_bc2e3ce7f2e00827.webp"
                  className="mr-2"
                />
                <span className="ml-2 text-lg font-semibold">weizwz</span>
              </div>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                  onClick={() => {
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.title}
                </a>
              ))}

              <div className="border-t border-gray-200 my-4 pt-4">
                <Button
                  type="primary"
                  shape="round"
                  icon={<ReadOutlined />}
                  className="mb-3"
                  href="https://note.weizwz.com/"
                  target="_blank"
                >
                  博客
                </Button>
                <br />
                <Button
                  type="default"
                  shape="round"
                  icon={<MailOutlined />}
                  href="mailto:weizwz@foxmail.com"
                >
                  联系
                </Button>
              </div>
            </div>
          </div>
        </Drawer>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center pt-20 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
        <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="text-center">
            <h1 className="text-8xl font-bold mb-2 tracking-tight">
              <span className="text-black">WEIZWZ </span>
              <span className="text-gray-400">CODING</span>
            </h1>
            <h1 className="text-8xl font-bold mb-6 tracking-tight">
              <span className="text-black">ENGAGE </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
                FUTURE
              </span>
            </h1>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-600 mb-2">
                分享编码世界
              </p>
              <p className="text-3xl font-bold text-gray-400 mb-8">
                拥抱现代科技生活
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                type="primary"
                size="large"
                shape="round"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                了解我
              </Button>
              <Button
                size="large"
                icon={<GithubOutlined />}
                className="border-gray-300 px-4 py-3 h-auto text-base rounded-full"
                shape="round"
                href="https://github.com/weizwz"
                target="_blank"
              />
              <Button
                size="large"
                icon={<MailOutlined />}
                className="border-gray-300 px-4 py-3 h-auto text-base rounded-full"
                shape="round"
                href="mailto:weizwz@foxmail.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products Section */}
      <Recommended />

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Blog Articles Section */}
      <BlogArticles />

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}
