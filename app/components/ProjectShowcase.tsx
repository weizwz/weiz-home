import {
  GithubOutlined,
  JavaScriptOutlined,
  ZhihuOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

interface ProjectShowcaseProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

export function ProjectShowcase({
  title = "ThisCover",
  subtitle = "你的封面，我来设计",
  description = "个性化主题和配置，丰富的图标，实时预览，适配多个主流平台，完全免费，还不来试试！",
  primaryButtonText = "进一步了解",
  secondaryButtonText = "开始",
  primaryButtonLink = "https://cover.weizwz.com/",
  secondaryButtonLink = "https://cover.weizwz.com/editor/",
}: ProjectShowcaseProps) {
  return (
    <section className="py-20 mx-7 m-auto rounded-4xl bg-gradient-to-br from-slate-900 via-indigo-700 to-slate-800 relative overflow-hidden">
      {/* 背景装饰 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(99,102,241,0.6), transparent 50%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(129,140,248,0.4), transparent 50%)",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* 项目标签 */}
          <div className="inline-block text-white text-xl font-medium mb-6 underline decoration-wavy decoration-red-400 underline-offset-6">
            {title}
          </div>

          {/* 主标题 */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {subtitle}
          </h2>

          {/* 描述文字 */}
          <p className="text-gray-200 mb-10 max-w-100 mx-auto leading-relaxed">
            {description}
          </p>

          {/* 按钮组 */}
          <div className="flex justify-center gap-4">
            <Button
              type="primary"
              size="large"
              shape="round"
              href={primaryButtonLink}
              target="_blank"
            >
              {primaryButtonText}
            </Button>
            <Button
              size="large"
              shape="round"
              href={secondaryButtonLink}
              target="_blank"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>

        {/* 设备展示区域 */}
        <div className="relative flex justify-center items-center pt-16">
          {/* 背景装饰图标 */}
          <div className="absolute inset-0 flex justify-center items-center">
            {/* 浮动的应用图标 */}
            <div
              className="absolute top-12 left-1/5 opacity-70 animate-pulse"
              style={{ animationDelay: "0s" }}
            >
              <ZhihuOutlined
                className="text-3xl"
                style={{ color: "#2B7FFF" }}
              />
            </div>
            <div
              className="absolute top-16 right-[32%] opacity-70 animate-spin"
              style={{ animationDelay: "1s" }}
            >
              <img src="https://api.iconify.design/devicon:react.svg" className="w-16 h-16" alt="icon" />
            </div>
            <div
              className="absolute bottom-10 left-[29%] opacity-80 animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              <img src="https://api.iconify.design/simple-icons:xiaohongshu.svg?color=%23FF2341" className="w-24 h-16" alt="icon" />
            </div>
            <div
              className="absolute bottom-0 right-1/4 opacity-80 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <GithubOutlined className="text-5xl" style={{ color: "#000" }} />
            </div>
            <div
              className="absolute top-1/2 left-10 opacity-50 animate-bounce"
              style={{ animationDelay: "1.5s" }}
            >
              <JavaScriptOutlined
                className="text-5xl"
                style={{ color: "#FEBA00" }}
              />
            </div>
            <div
              className="absolute top-1/3 right-10 opacity-70 animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              <img src="https://api.iconify.design/simple-icons:juejin.svg?color=%232380FF" className="w-12 h-12" alt="icon" />
            </div>
          </div>

          {/* 主要设备展示 */}
          <div className="relative z-10 flex items-center justify-center gap-8">
            {/* 手机 */}
            <div className="relative">
              <div className="w-32 h-60 ml-20 mr-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl p-2 shadow-2xl transform rotate-24 hover:rotate-18 transition-transform duration-500">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="https://p.weizwz.com/cover/thiscover3_2x3_56c6e944063ea327.webp"
                    alt="封面3"
                    className="h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* 笔记本电脑 */}
            <div className="relative">
              <div className="w-80 h-52 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
                <div className="w-full h-full bg-gary-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full"></div>
                  <img
                    src="https://p.weizwz.com/cover/thiscover1_4x3_1c30c0287378464e.webp"
                    alt="封面1"
                    className="w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="w-80 h-3 bg-gray-600 rounded-t-md rounded-b-2xl"></div>
            </div>

            {/* 平板 */}
            <div className="relative">
              <div className="w-56 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-2 shadow-2xl transform rotate-45 hover:rotate-30 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="https://p.weizwz.com/cover/thiscover2_3x2_4a4e2de8d6047cd0.webp"
                    alt="封面2"
                    className="h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
