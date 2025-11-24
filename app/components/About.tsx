import {
  GithubOutlined,
  MailOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import { config } from "../config";
import { Section } from "./common/Section";
import { Card } from "./common/Card";

interface AboutProps {
  title?: string;
}

export function About({ title = "你好，我是 weizwz" }: AboutProps) {
  const techStack = [
    { name: "JavaScript", color: "bg-blue-100 text-blue-600" },
    { name: "Vue.js", color: "bg-emerald-100 text-emerald-600" },
    { name: "React", color: "bg-sky-100 text-sky-600" },
    { name: "Node.js", color: "bg-yellow-100 text-yellow-700" },
    { name: "Next.js", color: "bg-purple-100 text-purple-600" },
    { name: "uni-app", color: "bg-rose-100 text-rose-600" },
  ];

  return (
    <Section id="about" className="bg-gray-50" maxWidth="max-w-6xl">
        
        {/* Intro Card */}
        <Card className="p-12 text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            一名充满热情的前端开发工程师，专注于构建高质量的 Web 应用和用户体验。拥有丰富的前端开发经验，熟练掌握现代 Web 技术栈，致力于通过技术创新解决实际问题，为用户创造价值。
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span 
                key={tech.name} 
                className={`px-4 py-2 rounded-full text-sm font-semibold ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </Card>

        {/* Contact Section */}
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-gray-500 text-lg mb-8">
            如果您有有趣的项目想法或合作机会，欢迎与我联系
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a 
              href={config.social.email}
              className="bg-white rounded-full p-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <MailOutlined className="text-md text-blue-500! group-hover:scale-110 transition-transform" />
              <span className="text-gray-600 font-medium">Mail: weizwz@foxmail.com</span>
            </a>

            {/* GitHub Card */}
            <a 
              href={config.social.github}
              target="_blank"
              className="bg-white rounded-full p-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <GithubOutlined className="text-md text-blue-500! group-hover:scale-110 transition-transform" />
              <span className="text-gray-600 font-medium">Social: github.com/weizwz</span>
            </a>

            {/* WeChat Card */}
            <a 
              href="https://note.weizwz.com/pages/links"
              target="_blank"
              className="bg-white rounded-full p-4 flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <MessageOutlined className="text-md text-blue-500! group-hover:scale-110 transition-transform" />
              <span className="text-gray-600 font-medium">Links: weizwz.com/links</span>
            </a>
          </div>
        </div>

    </Section>
  );
}
