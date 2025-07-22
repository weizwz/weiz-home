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
  subtitle = "你的创意，我来设计",
  description = "个性化主题和配置，实时预览，适配多个主流平台，完全免费，还不来试试！",
  primaryButtonText = "进一步了解",
  secondaryButtonText = "开始",
  primaryButtonLink = "https://cover.weizwz.com/",
  secondaryButtonLink = "https://cover.weizwz.com/editor/",
}: ProjectShowcaseProps) {
  return (
    <section className="py-20 mx-10 rounded-4xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.15),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* 项目标签 */}
          <div className="inline-block px-4 py-1 bg-indigo-700 text-white text-sm font-medium rounded-full mb-6">
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
          <div className="flex justify-center gap-4 mb-16">
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
        <div className="relative flex justify-center items-center">
          {/* 背景装饰图标 */}
          <div className="absolute inset-0 flex justify-center items-center">
            {/* 浮动的应用图标 */}
            <div className="absolute top-0 left-1/4 w-12 h-12 bg-red-500 rounded-xl opacity-80 animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-10 right-1/4 w-10 h-10 bg-blue-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-10 left-1/3 w-14 h-14 bg-green-500 rounded-2xl opacity-60 animate-bounce" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-0 right-1/3 w-8 h-8 bg-purple-500 rounded-lg opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-10 w-6 h-6 bg-yellow-500 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/3 right-10 w-10 h-10 bg-pink-500 rounded-xl opacity-60 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          </div>
          
          {/* 主要设备展示 */}
          <div className="relative z-10 flex items-center justify-center gap-8">
            {/* 手机 */}
            <div className="relative">
              <div className="w-32 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-2 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">TC</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 笔记本电脑 */}
            <div className="relative">
              <div className="w-80 h-52 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">TC</span>
                  </div>
                </div>
              </div>
              <div className="w-80 h-4 bg-gray-700 rounded-b-2xl"></div>
            </div>
            
            {/* 平板 */}
            <div className="relative">
              <div className="w-40 h-56 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-2 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-black font-bold text-xl">TC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
}