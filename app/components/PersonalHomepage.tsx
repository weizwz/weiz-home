import { useState, useRef, useEffect, Suspense, lazy } from "react";
import { Avatar, Button, Drawer, Spin } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  MenuOutlined,
  ReadOutlined,
  CloseOutlined,
} from "@ant-design/icons";

// Lazy load components
const Recommended = lazy(() => import("./Recommended").then(module => ({ default: module.Recommended })));
const BlogArticles = lazy(() => import("./BlogArticles").then(module => ({ default: module.BlogArticles })));
const NoteShowcase = lazy(() => import("./NoteShowcase").then(module => ({ default: module.NoteShowcase })));
const About = lazy(() => import("./About").then(module => ({ default: module.About })));
const ProjectShowcase = lazy(() => import("./ProjectShowcase").then(module => ({ default: module.ProjectShowcase })));
const Footer = lazy(() => import("./Footer").then(module => ({ default: module.Footer })));
import type { Article } from "../types/article";
import { config } from "../config";

interface PersonalHomepageProps {
  articles?: Article[];
}

export function PersonalHomepage({ articles = [] }: PersonalHomepageProps) {
  // 导航项数据
  const navItems = [
    { title: "推荐", id: "recommend" },
    { title: "文章", id: "article" },
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

  // 处理鼠标进入导航项

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
        <div className="bg-white/50 backdrop-blur-xs rounded-full shadow-lg py-3 px-6 flex gap-4 items-center justify-between">
          <div className="flex items-center">
            <Avatar
              size={40}
              src={config.social.avatar}
              className="cursor-pointer hover:scale-120 duration-300 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.275)]"
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
            <span className="ml-2 text-lg font-semibold md:hidden">weizwz</span>
          </div>

          {/* 桌面导航 */}
          <div
            className="hidden md:flex items-center relative"
            ref={navRef}
            onMouseLeave={handleMouseLeave}
          >
              {/* 滑动背景指示器 */}
              <div
                className="absolute bg-white/80 border border-blue-500 rounded-full transition-all duration-500"
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
                  className="px-3 py-1.5 text-gray-800 hover:text-blue-500 relative nav-item cursor-pointer"
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
          <div className="flex items-center gap-4">
            {/* 移动端汉堡菜单按钮 */}
            <div className="md:hidden flex items-center">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center justify-center"
                aria-label="Open menu"
              />
            </div>

            {/* 博客按钮 */}
            <Button
              type="primary"
              shape="round"
              href={config.blog.url}
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
                  src={config.social.avatar}
                  className="mr-2"
                />
                <span className="ml-2 text-lg font-semibold">weizwz</span>
              </div>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
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
                  href={config.blog.url}
                  target="_blank"
                >
                  博客
                </Button>
                <br />
                <Button
                  type="default"
                  shape="round"
                  icon={<MailOutlined />}
                  href={config.social.email}
                >
                  联系
                </Button>
              </div>
            </div>
          </div>
        </Drawer>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center pt-16 md:pt-20 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
        <div className="relative max-w-8xl mx-auto px-4 py-12 md:py-20 w-full">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-2 tracking-tight">
              <span className="text-black">WEIZWZ </span>
              <span className="text-gray-400">CODING</span>
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:mb-6 tracking-tight">
              <span className="text-black">ENGAGE </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
                FUTURE
              </span>
            </h1>
            <div className="text-center">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-600 mb-1 md:mb-2">
                分享编码世界
              </p>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-400 mb-6 md:mb-8">
                拥抱现代科技生活
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Button
                type="primary"
                size="large"
                shape="round"
                className="w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                了解我
              </Button>
              <div className="flex gap-3 sm:gap-4 justify-center">
                <Button
                  size="large"
                  icon={<GithubOutlined />}
                  className="border-gray-300 px-4 py-3 h-auto text-base rounded-full flex-1 sm:flex-none"
                  shape="round"
                  href={config.social.github}
                  target="_blank"
                  aria-label="GitHub"
                />
                <Button
                  size="large"
                  icon={<MailOutlined />}
                  className="border-gray-300 px-4 py-3 h-auto text-base rounded-full flex-1 sm:flex-none"
                  shape="round"
                  href={config.social.email}
                  aria-label="Email"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <Spin size="large" />
        </div>
      }>
        {/* Recommended Products Section */}
        <Recommended />

        {/* Project Showcase Section */}
        <ProjectShowcase />

        {/* Note Showcase Section */}
        <NoteShowcase />

        {/* Blog Articles Section */}
        <BlogArticles articles={articles} />

        {/* About Section */}
        <About />

        {/* Footer */}
        <Footer />
      </Suspense>
    </div>
  );
}
