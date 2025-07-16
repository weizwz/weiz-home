import { Avatar, Card, Tag, Button } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  WechatOutlined,
  CodeOutlined,
  RocketOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export function PersonalHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(156,146,172,0.05)_2px,_transparent_2px)] bg-[length:60px_60px] opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
          <div className="text-center">
            <div className="float-animation mb-8">
              <Avatar
                size={140}
                src="/avatar.svg"
                className="shadow-2xl border-4 border-white/20"
                style={{ backgroundColor: "#667eea" }}
              >
                WZ
              </Avatar>
            </div>
            <h1 className="text-6xl font-bold gradient-text mb-6">Wei Z</h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              全栈开发者 · 技术爱好者 · 开源贡献者
            </p>
            <div className="flex justify-center flex-wrap gap-3 mb-10">
              <Tag
                color="blue"
                className="px-4 py-2 text-base rounded-full border-0 shadow-md"
              >
                React
              </Tag>
              <Tag
                color="green"
                className="px-4 py-2 text-base rounded-full border-0 shadow-md"
              >
                Node.js
              </Tag>
              <Tag
                color="purple"
                className="px-4 py-2 text-base rounded-full border-0 shadow-md"
              >
                TypeScript
              </Tag>
              <Tag
                color="orange"
                className="px-4 py-2 text-base rounded-full border-0 shadow-md"
              >
                Python
              </Tag>
            </div>
            <div className="flex justify-center gap-6">
              <Button
                type="primary"
                size="large"
                icon={<CodeOutlined />}
                className="shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                查看作品
              </Button>
              <Button
                size="large"
                icon={<MailOutlined />}
                className="shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full glass-effect"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                联系我
              </Button>
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
