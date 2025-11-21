import { Button } from 'antd'
import { config } from '../config'
import { useRef, useState } from 'react'

interface NoteShowcaseProps {
  title?: string
  logo?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonLink?: string
}

export function NoteShowcase({
  title = '唯知笔记',
  logo = config.blog.logo,
  subtitle = '探索知识的无限可能',
  description = '在这里，我们分享最新的技术趋势、编程技巧和开发心得，一起成长，共同进步',
  primaryButtonText = '更新日志',
  secondaryButtonText = '访问',
  primaryButtonLink = config.blog.logsUrl,
  secondaryButtonLink = config.blog.url
}: NoteShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='py-20 mx-4 md:mx-7 m-auto rounded-2xl md:rounded-4xl relative overflow-hidden group'
    >
      {/* Background Layers */}
      
      {/* 1. Blurred Background (Always visible) */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl scale-110 transition-transform duration-700'
        style={{ 
          backgroundImage: `url('https://p.weizwz.com/siteshot_note_all.webp')`,
        }}
      ></div>

      {/* 1.5 Blue Tint Overlay for Blurred State */}
      <div className='absolute inset-0 bg-gradient-to-br from-sky-500/40 to-blue-600/40 mix-blend-overlay'></div>

      {/* 2. Clear Background (Revealed by spotlight) */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300'
        style={{ 
          backgroundImage: `url('https://p.weizwz.com/siteshot_note_all.webp')`,
          backgroundPosition: 'top center',
          maskImage: `radial-gradient(circle 240px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 240px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          opacity: isHovering ? 1 : 0
        }}
      ></div>

      {/* 3. Dark Overlay for text readability */}
      <div className='absolute inset-0 bg-blue-950/40 z-1 pointer-events-none'></div>

      {/* Content */}
      <div className='max-w-8xl mx-auto px-4 relative z-10'>
        <div className='text-center'>
          {/* 项目标签 */}
          <div className='flex items-center w-fit m-auto text-white text-xl font-medium mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-lg'>
            <img src={logo} alt="logo" className="w-6 h-6 mr-2" /> <span>{title}</span>
          </div>

          {/* 主标题 */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4 drop-shadow-lg'>{subtitle}</h2>

          {/* 描述文字 */}
          <p className='text-gray-200 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg px-4 drop-shadow-md'>{description}</p>

          {/* 按钮组 */}
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 mb-16'>
            <Button
              size='large'
              shape='round'
              href={primaryButtonLink}
              target='_blank'
              className='bg-transparent! border-white/50! text-white! hover:bg-white/40! hover:border-white! backdrop-blur-md w-full sm:w-auto h-12 px-8 text-lg'>
              {primaryButtonText}
            </Button>
            <Button
              type='primary'
              size='large'
              shape='round'
              href={secondaryButtonLink}
              target='_blank'
              className='backdrop-blur-md w-full sm:w-auto h-12 px-8 text-lg'>
              {secondaryButtonText}
            </Button>
          </div>
        </div>

        {/* 知识展示区域 (Mockups) */}
        <div className='relative flex justify-center items-center'>
          {/* 主要设备展示 */}
          <div className='relative z-10 flex items-end justify-center gap-6 md:gap-12 scale-90 md:scale-100'>
            {/* 手机 */}
            <div className='relative transform translate-y-4 md:translate-y-8 z-20'>
              <div className='w-24 md:w-32 bg-gray-800 rounded-2xl md:rounded-3xl p-1.5 shadow-2xl border border-gray-700'>
                <div className='w-full aspect-9/18 bg-black rounded-xl md:rounded-2xl overflow-hidden relative'>
                   <img 
                    src="https://p.weizwz.com/note.weizwz.com_mobile_d5167b4e5c4c9f25.webp" 
                    alt="Mobile View" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* 笔记本电脑 */}
            <div className='relative z-10'>
              <div className='w-64 md:w-96 bg-gray-800 rounded-t-xl md:rounded-t-2xl p-2 pb-0 shadow-2xl border border-gray-700 border-b-0'>
                <div className='w-full aspect-16/10 bg-black rounded-t-lg overflow-hidden relative'>
                  <img 
                    src="https://p.weizwz.com/note.weizwz.com_8_5_62b3a31a82669509.webp" 
                    alt="Desktop View" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Laptop Base */}
              <div className='w-[110%] -ml-[5%] h-3 md:h-4 bg-gray-700 rounded-b-xl md:rounded-b-2xl shadow-xl border-t border-gray-600'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
