import { GithubOutlined, JavaScriptOutlined, ZhihuOutlined } from '@ant-design/icons'
import { Button } from 'antd'

interface ProjectShowcaseProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonLink?: string
}

export function ProjectShowcase({
  title = 'ThisCover',
  subtitle = '你的封面，我来设计',
  description = '个性化主题和配置，丰富的图标，实时预览，适配多个主流平台，完全免费，还不来试试！',
  primaryButtonText = '进一步了解',
  secondaryButtonText = '开始',
  primaryButtonLink = 'https://cover.weizwz.com/',
  secondaryButtonLink = 'https://cover.weizwz.com/editor/'
}: ProjectShowcaseProps) {
  return (
    <section className='py-10 md:py-20 mx-4 md:mx-7 m-auto rounded-2xl md:rounded-4xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 relative overflow-hidden'>
      {/* 卡通云朵背景 */}
      <div className='absolute inset-0'>
        {/* 主要云朵 */}
        <div className='absolute top-10 left-10 w-32 h-20 bg-white/10 rounded-full blur-sm animate-float'></div>
        <div className='absolute top-20 right-20 w-24 h-16 bg-white/8 rounded-full blur-sm animate-float' style={{ animationDelay: '2s' }}></div>
        <div className='absolute bottom-20 left-1/4 w-40 h-24 bg-white/12 rounded-full blur-sm animate-float' style={{ animationDelay: '4s' }}></div>
        <div className='absolute bottom-10 right-1/3 w-28 h-18 bg-white/9 rounded-full blur-sm animate-float' style={{ animationDelay: '1s' }}></div>

        {/* 小云朵 */}
        <div className='absolute top-1/3 left-1/5 w-16 h-10 bg-white/6 rounded-full blur-sm animate-float' style={{ animationDelay: '3s' }}></div>
        <div className='absolute top-2/3 right-1/5 w-20 h-12 bg-white/7 rounded-full blur-sm animate-float' style={{ animationDelay: '5s' }}></div>
      </div>

      {/* 几何装饰元素 */}
      <div className='absolute inset-0'>
        {/* 圆形装饰 */}
        <div className='absolute top-16 left-1/3 w-4 h-4 bg-indigo-300/30 rounded-full animate-pulse'></div>
        <div className='absolute top-32 right-1/4 w-6 h-6 bg-purple-300/25 rounded-full animate-pulse' style={{ animationDelay: '1s' }}></div>
        <div className='absolute bottom-32 left-1/5 w-5 h-5 bg-violet-300/30 rounded-full animate-pulse' style={{ animationDelay: '2s' }}></div>
        <div className='absolute bottom-16 right-1/3 w-3 h-3 bg-indigo-400/35 rounded-full animate-pulse' style={{ animationDelay: '3s' }}></div>

        {/* 三角形装饰 */}
        <div
          className='absolute top-24 right-1/2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-indigo-300/25 animate-bounce'
          style={{ animationDelay: '1.5s' }}></div>
        <div
          className='absolute bottom-24 left-1/2 w-0 h-0 border-l-3 border-r-3 border-b-5 border-l-transparent border-r-transparent border-b-purple-300/30 animate-bounce'
          style={{ animationDelay: '2.5s' }}></div>

        {/* 星星装饰 */}
        <div className='absolute top-20 left-2/3 text-indigo-200/40 text-lg animate-pulse' style={{ animationDelay: '0.5s' }}>
          ✦
        </div>
        <div className='absolute bottom-28 right-2/3 text-purple-200/35 text-sm animate-pulse' style={{ animationDelay: '1.8s' }}>
          ✧
        </div>
        <div className='absolute top-2/3 left-1/6 text-violet-200/40 text-base animate-pulse' style={{ animationDelay: '3.2s' }}>
          ✦
        </div>
      </div>

      {/* 渐变光效 */}
      <div className='absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent'></div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <div className='text-center'>
          {/* 项目标签 */}
          <div className='inline-block text-white text-xl font-medium mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20'>
            ✨ {title}
          </div>

          {/* 主标题 */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4'>{subtitle}</h2>

          {/* 描述文字 */}
          <p className='text-gray-200 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base px-4'>{description}</p>

          {/* 按钮组 */}
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4'>
            <Button type='primary' size='large' shape='round' href={primaryButtonLink} target='_blank' className='w-full sm:w-auto'>
              {primaryButtonText}
            </Button>
            <Button size='large' shape='round' href={secondaryButtonLink} target='_blank' className='w-full sm:w-auto'>
              {secondaryButtonText}
            </Button>
          </div>
        </div>

        {/* 设备展示区域 */}
        <div className='relative flex justify-center items-center pt-8 md:pt-16'>
          {/* 主要设备展示 */}
          <div className='relative z-10 flex items-center justify-center gap-4 md:gap-8 scale-75 md:scale-100'>
            {/* 手机 */}
            <div className='relative'>
              <div className='w-24 md:w-32 h-44 md:h-60 ml-12 md:ml-20 mr-2 md:mr-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl md:rounded-3xl p-1.5 md:p-2 shadow-2xl transform rotate-24 hover:rotate-18 transition-transform duration-500'>
                <div className='w-full h-full bg-black rounded-2xl flex items-center justify-center overflow-hidden'>
                  <img src='https://p.weizwz.com/cover/thiscover3_2x3_56c6e944063ea327.webp' alt='封面3' className='h-full object-cover object-top' />
                </div>
              </div>
            </div>

            {/* 笔记本电脑 */}
            <div className='relative'>
              <div className='w-60 md:w-80 h-40 md:h-52 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl'>
                <div className='w-full h-full bg-gary-100 rounded-lg flex items-center justify-center relative overflow-hidden'>
                  <div className='absolute top-2 left-2 w-3 h-3 bg-black rounded-full'></div>
                  <img src='https://p.weizwz.com/cover/thiscover1_4x3_1c30c0287378464e.webp' alt='封面1' className='w-full object-cover object-top' />
                </div>
              </div>
              <div className='w-60 md:w-80 h-2 md:h-3 bg-gray-600 rounded-t-md rounded-b-xl md:rounded-b-2xl'></div>
            </div>

            {/* 平板 */}
            <div className='relative'>
              <div className='w-42 md:w-56 h-30 md:h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl md:rounded-2xl p-1.5 md:p-2 shadow-2xl transform rotate-45 hover:rotate-30 transition-transform duration-500'>
                <div className='w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden'>
                  <img src='https://p.weizwz.com/cover/thiscover2_3x2_4a4e2de8d6047cd0.webp' alt='封面2' className='h-full object-cover object-top' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
