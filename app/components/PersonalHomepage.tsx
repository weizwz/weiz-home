import { Avatar, Card, Tag, Button, Drawer } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  WechatOutlined,
  RocketOutlined,
  HeartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { RecommendedProducts } from "./RecommendedProducts";
import { useState, useRef, useEffect } from "react";

export function PersonalHomepage() {
  // 导航项数据
  const navItems = [
    { title: "推荐", id: "recommend" },
    { title: "媒体", id: "#" },
    { title: "服务", id: "#" },
    { title: "主题", id: "#" },
    { title: "表情", id: "#" },
    { title: "项目", id: "#" },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 flex justify-center hover:">
        <div className="bg-white/30 backdrop-blur-md rounded-full shadow-lg py-3 px-6 flex gap-4 items-center justify-between">
          <div className="flex items-center">
            <Avatar
              size={40}
              src="/avatar.svg"
              className="mr-2"
              style={{ backgroundColor: "#FFC107" }}
            >
              WZ
            </Avatar>
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

          <div className="flex items-center space-x-3">
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
            <Button type="primary" className="" shape="round">
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
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <Avatar
                  size={40}
                  src="/avatar.svg"
                  className="mr-2"
                  style={{ backgroundColor: "#FFC107" }}
                >
                  WZ
                </Avatar>
                <span className="text-lg font-bold">Wei Z</span>
              </div>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}

              <div className="border-t border-gray-200 my-4 pt-4">
                <Button
                  type="primary"
                  block
                  className="mb-3"
                  style={{ backgroundColor: "#36CFC9", borderColor: "#36CFC9" }}
                  icon={<WechatOutlined />}
                >
                  联系我
                </Button>
                <Button type="primary" block className="" shape="round">
                  博客
                </Button>
              </div>
            </div>
          </div>
        </Drawer>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center pt-20">
        <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="text-center">
            <h1 className="text-8xl font-bold mb-2 tracking-tight">
              <span className="text-black">WEIZWZ </span>
              <span className="text-gray-400">唯知为之</span>
            </h1>
            <h1 className="text-8xl font-bold mb-6 tracking-tight">
              <span className="text-black">DIGITAL &nbsp; </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">CODING</span>
            </h1>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-600 mb-2">展示编码世界</p>
              <p className="text-3xl font-bold text-gray-400 mb-8">
                分享现代科技生活
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
                href="https://github.com"
                target="_blank"
              />
              <Button
                size="large"
                icon={<MailOutlined />}
                className="border-gray-300 px-4 py-3 h-auto text-base rounded-full"
                shape="round"
                href="mailto:your-email@example.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products Section */}
      <RecommendedProducts />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            关于我
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="card-hover shadow-xl border-0 rounded-2xl overflow-hidden">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RocketOutlined className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  技术热情
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  热爱探索新技术，专注于现代 Web 开发，
                  追求代码质量和用户体验的完美结合。
                  始终保持学习的心态，拥抱技术变化。
                </p>
              </div>
            </Card>
            <Card className="card-hover shadow-xl border-0 rounded-2xl overflow-hidden">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartOutlined className="text-3xl text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  开源精神
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  积极参与开源社区，分享技术经验，
                  相信开源的力量能让世界变得更美好。
                  通过代码连接世界，用技术创造价值。
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            技能栈
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <SkillCard
              title="前端开发"
              skills={["React", "Vue.js", "TypeScript", "Tailwind CSS", "Vite"]}
              color="blue"
            />
            <SkillCard
              title="后端开发"
              skills={["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"]}
              color="green"
            />
            <SkillCard
              title="工具链"
              skills={["Git", "Docker", "AWS", "Vercel", "GitHub Actions"]}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            精选项目
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard
              title="个人博客系统"
              description="基于 React + Node.js 的现代化博客平台，支持 Markdown 编辑和主题切换。"
              tags={["React", "Node.js", "MongoDB"]}
              link="#"
            />
            <ProjectCard
              title="任务管理工具"
              description="团队协作的任务管理应用，具有实时同步和权限管理功能。"
              tags={["Vue.js", "Express", "Socket.io"]}
              link="#"
            />
            <ProjectCard
              title="数据可视化平台"
              description="企业级数据分析和可视化平台，支持多种图表类型和实时数据。"
              tags={["React", "D3.js", "Python"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">联系我</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            有想法？让我们一起创造些什么吧！
            欢迎与我交流技术、分享想法或探讨合作机会。
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <Button
              type="primary"
              size="large"
              icon={<GithubOutlined />}
              className="bg-gray-800 border-gray-800 hover:bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full"
              href="https://github.com"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              type="primary"
              size="large"
              icon={<MailOutlined />}
              className="bg-white text-blue-600 border-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full"
              href="mailto:your-email@example.com"
            >
              邮箱
            </Button>
            <Button
              type="primary"
              size="large"
              icon={<WechatOutlined />}
              className="bg-green-500 border-green-500 hover:bg-green-400 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full"
            >
              微信
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2025 Wei Z. Made with ❤️ using React & Ant Design
        </p>
      </footer>
    </div>
  );
}

interface SkillCardProps {
  title: string;
  skills: string[];
  color: "blue" | "green" | "purple";
}

function SkillCard({ title, skills, color }: SkillCardProps) {
  return (
    <Card className="card-hover shadow-xl border-0 rounded-2xl overflow-hidden h-full">
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">{title}</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <Tag
              key={skill}
              color={color}
              className="mb-2 px-3 py-1 text-sm rounded-full border-0 shadow-sm"
            >
              {skill}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card
      className="card-hover shadow-xl border-0 rounded-2xl overflow-hidden h-full"
      actions={[
        <Button
          key="view"
          type="primary"
          href={link}
          className="rounded-full px-6"
          target="_blank"
        >
          查看项目
        </Button>,
      ]}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              key={tag}
              color="blue"
              className="px-2 py-1 text-xs rounded-full border-0 shadow-sm"
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}
