import { Avatar, Card, Tag, Button } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  WechatOutlined,
  RocketOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { RecommendedProducts } from "./RecommendedProducts";

export function PersonalHomepage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 flex justify-center">
        <div
          className="bg-white rounded-full shadow-lg py-3 px-6 flex items-center justify-between"
          style={{ width: "800px" }}
        >
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
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 relative group"
            >
              <span className="relative z-10">应用</span>
              <span
                className={`absolute inset-0 bg-blue-100 rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity`}
              ></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              媒体
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              服务
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              主题
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              表情
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              项目
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              type="primary"
              shape="circle"
              icon={<WechatOutlined />}
              className="flex items-center justify-center"
              style={{ backgroundColor: "#36CFC9", borderColor: "#36CFC9" }}
            />
            <Button
              type="primary"
              className="rounded-full px-6"
              style={{ backgroundColor: "#1677ff", borderColor: "#1677ff" }}
            >
              博客
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(156,146,172,0.05)_2px,_transparent_2px)] bg-[length:60px_60px] opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="text-left">
            <h1 className="text-7xl font-bold mb-2 tracking-tight">
              <span className="text-black">ZHANG HONE </span>
              <span className="text-gray-400">HEO</span>
            </h1>
            <h1 className="text-7xl font-bold mb-6 tracking-tight">
              <span className="text-black">DIGITAL </span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
                DESIGNER
              </span>
            </h1>
            <div className="max-w-2xl">
              <p className="text-2xl text-gray-600 mb-4">让设计师主导产品，</p>
              <p className="text-2xl text-gray-400 mb-12">
                来构建令人幸福的使用体验。
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                type="primary"
                size="large"
                className="bg-black border-black hover:bg-gray-800 px-8 py-3 h-auto text-base rounded-full"
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
                href="https://github.com"
                target="_blank"
              />
              <Button
                size="large"
                icon={<MailOutlined />}
                className="border-gray-300 px-4 py-3 h-auto text-base rounded-full"
                href="mailto:your-email@example.com"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Recommended Products Section */}
      <RecommendedProducts />

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
