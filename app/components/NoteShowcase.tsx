import {
  BookOutlined,
  EditOutlined,
  ShareAltOutlined,
  ReadOutlined,
  CodeOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

interface NoteShowcaseProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

export function NoteShowcase({
  title = "唯知笔记",
  subtitle = "探索知识的无限可能",
  description = "在这里，我们分享最新的技术趋势、编程技巧和开发心得，一起成长，共同进步",
  primaryButtonText = "建站历史",
  secondaryButtonText = "访问",
  primaryButtonLink = "https://note.weizwz.com/pages/logs",
  secondaryButtonLink = "https://note.weizwz.com/",
}: NoteShowcaseProps) {
  return (
    <section
      className="pt-20 mx-7 m-auto rounded-4xl bg-gradient-to-br from-blue-500 via-sky-500 to-blue-700 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #409eff 0%, #3a8ee6 50%, #409eff 100%)",
      }}
    >
      {/* 背景装饰 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(64,158,255,0.6), transparent 40%)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(58,142,230,0.4), transparent 30%)",
        }}
      ></div>

      <div className="max-w-8xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* 项目标签 */}
          <div className="inline-block text-white text-xl font-medium mb-6 underline decoration-wavy decoration-yellow-400 underline-offset-6">
            {title}
          </div>

          {/* 主标题 */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {subtitle}
          </h2>

          {/* 描述文字 */}
          <p className="text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed text-lg">
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
              className="bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-50"
            >
              {primaryButtonText}
            </Button>
            <Button
              size="large"
              shape="round"
              href={secondaryButtonLink}
              target="_blank"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>

        {/* 知识展示区域 */}
        <div className="relative flex justify-center items-center py-8">
          {/* 背景装饰图标 */}
          <div className="absolute inset-0 flex justify-center items-center">
            {/* 浮动的知识图标 */}
            <div
              className="absolute top-1/8 left-1/6 opacity-70 animate-pulse"
              style={{ animationDelay: "0s" }}
            >
              <BookOutlined className="text-4xl" style={{ color: "#ffffff" }} />
            </div>
            <div
              className="absolute top-0 right-[32%] opacity-70 animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              <EditOutlined className="text-3xl" style={{ color: "#ffffff" }} />
            </div>
            <div
              className="absolute bottom-0 left-[39%] opacity-80 animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              <ShareAltOutlined
                className="text-5xl"
                style={{ color: "#ffffff" }}
              />
            </div>
            <div
              className="absolute bottom-2 right-1/8 opacity-80 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <ReadOutlined className="text-4xl" style={{ color: "#ffffff" }} />
            </div>
            <div
              className="absolute top-1/2 left-1/12 opacity-60 animate-bounce"
              style={{ animationDelay: "1.5s" }}
            >
              <CodeOutlined className="text-5xl" style={{ color: "#ffffff" }} />
            </div>
            <div
              className="absolute top-1/3 right-10 opacity-70 animate-bounce"
              style={{ animationDelay: "1.8s" }}
            >
              <BulbOutlined className="text-4xl" style={{ color: "#ffffff" }} />
            </div>
          </div>

          {/* 主要内容展示 */}
          <div className="w-full relative z-10 flex items-center justify-center gap-8">
            {/* 笔记本电脑 */}
            <div className="w-1/2 min-w-100 aspect-[8/5]">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-lg relative overflow-hidden">
                  {/* 博客界面 iframe */}
                  <div className="w-full h-full overflow-hidden rounded-md">
                    {/* <ScaledIframe src="https://note.weizwz.com/" /> */}
                    <div className="w-full aspect-8/5 border-0 rounded-md overflow-hidden relative">
                      <iframe
                        className="w-full h-full absolute top-0 left-0 border-0"
                        src="https://note.weizwz.com/"
                        loading="lazy"
                        sandbox="allow-same-origin allow-scripts"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-4 bg-gray-600 rounded-t-md rounded-b-2xl border-8 border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
