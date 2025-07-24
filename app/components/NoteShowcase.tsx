import { BookOutlined, EditOutlined, ShareAltOutlined, ReadOutlined, CodeOutlined, LikeOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useRef, useState, useEffect } from 'react'

interface NoteShowcaseProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonLink?: string
}

export function NoteShowcase({
  title = '唯知笔记',
  subtitle = '探索知识的无限可能',
  description = '在这里，我们分享最新的技术趋势、编程技巧和开发心得，一起成长，共同进步',
  primaryButtonText = '建站历史',
  secondaryButtonText = '访问',
  primaryButtonLink = 'https://note.weizwz.com/pages/logs',
  secondaryButtonLink = 'https://note.weizwz.com/'
}: NoteShowcaseProps) {
  return (
    <section className='py-10 md:pt-20 mx-4 md:mx-7 m-auto rounded-2xl md:rounded-4xl bg-gradient-to-br from-sky-500 via-blue-500 to-blue-600 relative overflow-hidden'>
      {/* 光环效果 */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-1/4 w-32 h-32 border border-blue-300/10 rounded-full animate-ping'></div>
        <div className='absolute bottom-32 right-1/3 w-40 h-40 border border-cyan-300/8 rounded-full animate-ping' style={{ animationDelay: '1s' }}></div>
        <div className='absolute top-1/2 left-1/6 w-24 h-24 border border-sky-300/12 rounded-full animate-ping' style={{ animationDelay: '2s' }}></div>
        <div className='absolute top-1/3 right-1/5 w-20 h-20 border border-blue-200/15 rounded-full animate-ping' style={{ animationDelay: '3s' }}></div>
      </div>

      {/* 光束效果 */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-blue-300/20 to-transparent animate-pulse'></div>
        <div
          className='absolute top-16 right-1/3 w-px h-24 bg-gradient-to-b from-cyan-300/15 to-transparent animate-pulse'
          style={{ animationDelay: '1s' }}></div>
        <div
          className='absolute bottom-0 left-1/3 w-px h-28 bg-gradient-to-t from-sky-300/18 to-transparent animate-pulse'
          style={{ animationDelay: '2s' }}></div>
        <div
          className='absolute top-1/2 right-1/4 w-px h-20 bg-gradient-to-b from-blue-200/25 to-transparent animate-pulse'
          style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* 径向光效 */}
      <div className='absolute inset-0'>
        <div className='absolute top-24 left-1/5 w-16 h-16 bg-blue-300/5 rounded-full blur-xl animate-pulse'></div>
        <div className='absolute bottom-28 right-1/4 w-20 h-20 bg-cyan-300/4 rounded-full blur-xl animate-pulse' style={{ animationDelay: '1.5s' }}></div>
        <div className='absolute top-2/3 left-1/3 w-12 h-12 bg-sky-300/6 rounded-full blur-xl animate-pulse' style={{ animationDelay: '2.5s' }}></div>
        <div className='absolute top-1/4 right-1/6 w-18 h-18 bg-blue-200/8 rounded-full blur-xl animate-pulse' style={{ animationDelay: '0.8s' }}></div>
      </div>

      {/* 几何装饰元素 */}
      <div className='absolute inset-0'>
        {/* 光点粒子 */}
        <div className='absolute top-20 right-1/5 w-2 h-2 bg-white/30 rounded-full animate-pulse blur-sm'></div>
        <div className='absolute top-40 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse blur-sm' style={{ animationDelay: '0.8s' }}></div>
        <div className='absolute bottom-32 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-pulse blur-sm' style={{ animationDelay: '1.2s' }}></div>
        <div className='absolute bottom-48 left-1/6 w-1 h-1 bg-white/35 rounded-full animate-pulse blur-sm' style={{ animationDelay: '2s' }}></div>

        {/* 书本和笔记元素 */}
        <div className='absolute top-28 left-2/3 text-blue-200/40 text-2xl animate-pulse' style={{ animationDelay: '0.8s' }}>
          📚
        </div>
        <div className='absolute bottom-36 right-2/3 text-cyan-200/35 text-xl animate-pulse' style={{ animationDelay: '2.2s' }}>
          ✏️
        </div>
        <div className='absolute top-2/3 right-1/6 text-sky-200/30 text-lg animate-pulse' style={{ animationDelay: '3.5s' }}>
          📝
        </div>
        <div className='absolute top-1/4 left-1/8 text-blue-300/25 text-xl animate-pulse' style={{ animationDelay: '1.2s' }}>
          💡
        </div>
      </div>

      {/* 多层光影效果 */}
      <div className='absolute inset-0 bg-gradient-to-t from-transparent via-white/12 to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/6'></div>
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent'></div>

      {/* 聚光灯效果 */}
      <div className='absolute top-0 left-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl transform -translate-x-1/2'></div>
      <div className='absolute bottom-0 right-1/3 w-48 h-48 bg-blue-200/5 rounded-full blur-3xl'></div>

      {/* 动态光斑 */}
      <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-200/3 rounded-full blur-2xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      <div className='absolute bottom-1/3 right-1/4 w-40 h-40 bg-sky-200/4 rounded-full blur-2xl animate-pulse' style={{ animationDelay: '2.5s' }}></div>
      <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/4 to-white/8'></div>
      <div className='absolute inset-0 bg-gradient-to-bl from-white/3 via-transparent to-white/5'></div>

      {/* 动态光束 */}
      <div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse'></div>
      <div
        className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse'
        style={{ animationDelay: '1s' }}></div>
      <div
        className='absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-white/12 to-transparent animate-pulse'
        style={{ animationDelay: '2s' }}></div>

      {/* 聚光效果 */}
      <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-1/3 right-1/4 w-40 h-40 bg-white/4 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1.5s' }}></div>
      <div className='absolute top-2/3 left-2/3 w-24 h-24 bg-white/6 rounded-full blur-2xl animate-pulse' style={{ animationDelay: '3s' }}></div>

      <div className='max-w-8xl mx-auto px-4 relative z-10'>
        <div className='text-center'>
          {/* 项目标签 */}
          <div className='inline-block text-white text-xl font-medium mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20'>
            📚 {title}
          </div>

          {/* 主标题 */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4'>{subtitle}</h2>

          {/* 描述文字 */}
          <p className='text-blue-100 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg px-4'>{description}</p>

          {/* 按钮组 */}
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4'>
            <Button
              type='primary'
              size='large'
              shape='round'
              href={primaryButtonLink}
              target='_blank'
              className='bg-white text-blue-600 border-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-50 w-full sm:w-auto'>
              {primaryButtonText}
            </Button>
            <Button
              size='large'
              shape='round'
              href={secondaryButtonLink}
              target='_blank'
              className='border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 w-full sm:w-auto'>
              {secondaryButtonText}
            </Button>
          </div>
        </div>

        {/* 知识展示区域 */}
        <div className='relative flex justify-center items-center py-8'>
          {/* 背景装饰图标 */}
          <div className='absolute inset-0 flex justify-center items-center'>
            {/* 浮动的知识图标 */}
            <div className='absolute top-1/8 left-1/6 opacity-70 animate-pulse' style={{ animationDelay: '0s' }}>
              <BookOutlined className='text-4xl' style={{ color: '#ffffff' }} />
            </div>
            <div className='absolute top-0 right-[32%] opacity-70 animate-bounce' style={{ animationDelay: '1s' }}>
              <EditOutlined className='text-3xl' style={{ color: '#ffffff' }} />
            </div>
            <div className='absolute bottom-0 left-[39%] opacity-80 animate-pulse' style={{ animationDelay: '2s' }}>
              <ShareAltOutlined className='text-5xl' style={{ color: '#ffffff' }} />
            </div>
            <div className='absolute top-1/3 right-1/6 opacity-80 animate-bounce' style={{ animationDelay: '1.2s' }}>
              <ReadOutlined className='text-4xl' style={{ color: '#ffffff' }} />
            </div>
            <div className='absolute top-1/2 left-1/12 opacity-60 animate-bounce' style={{ animationDelay: '1.5s' }}>
              <CodeOutlined className='text-5xl' style={{ color: '#ffffff' }} />
            </div>
            <div className='absolute top-2/3 right-1/5 opacity-50 animate-ping' style={{ animationDelay: '1.8s' }}>
              <LikeOutlined className='text-4xl' style={{ color: '#ffffff' }} />
            </div>
          </div>

          {/* 主要设备展示 */}
          <div className='relative z-10 flex items-center justify-center gap-6 md:gap-12 scale-90 md:scale-100'>
            {/* 手机 */}
            <div className='relative'>
              <div className='w-28 md:w-36 h-52 md:h-64 bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl md:rounded-3xl p-2 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500'>
                <div className='w-full h-full bg-white rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden relative'>
                  {/* 手机状态条 */}
                  <div className='absolute z-1 bottom-1 left-6 right-6 h-1 bg-gray-500 rounded'></div>

                  {/* 手机iframe */}
                  <div className='w-full h-full overflow-hidden rounded-lg'>
                    <ScaledIframe src='https://note.weizwz.com/' isMobile={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* 笔记本电脑 */}
            <div className='relative'>
              <div className='w-72 md:w-96 h-48 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-3 shadow-2xl'>
                <div className='w-full h-full bg-white rounded-lg relative overflow-hidden'>
                  {/* 笔记本iframe */}
                  <div className='w-full h-full overflow-hidden rounded-md'>
                    <ScaledIframe src='https://note.weizwz.com/' />
                  </div>
                </div>
              </div>
              <div className='w-72 md:w-96 h-2 md:h-3 bg-gray-600 rounded-t-md rounded-b-xl md:rounded-b-2xl'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 动态缩放的 iframe 组件
interface ScaledIframeProps {
  src: string
  isMobile?: boolean
}

function ScaledIframe({ src, isMobile = false }: ScaledIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.25)

  // 根据设备类型设置不同的尺寸
  const DESKTOP_WIDTH = 1024
  const DESKTOP_HEIGHT = 640
  const MOBILE_WIDTH = 360
  const MOBILE_HEIGHT = 640

  const frameWidth = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH
  const frameHeight = isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT

  // 计算缩放比例
  const calculateScale = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const containerWidth = rect.width
      const containerHeight = rect.height

      // 计算宽度和高度的缩放比例，取较小的值以确保完整显示
      const scaleX = containerWidth / frameWidth
      const scaleY = containerHeight / frameHeight
      const newScale = Math.min(scaleX, scaleY)

      setScale(newScale)
    }
  }

  // 监听容器尺寸变化
  useEffect(() => {
    calculateScale()

    const resizeObserver = new ResizeObserver(() => {
      calculateScale()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // 监听窗口大小变化
    const handleResize = () => {
      setTimeout(calculateScale, 100) // 延迟执行以确保布局完成
    }

    window.addEventListener('resize', handleResize)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div ref={containerRef} className={`w-full border-0 rounded-md overflow-hidden relative ${isMobile ? 'aspect-9/16' : 'aspect-8/5'}`}>
      <iframe
        className='absolute top-0 left-0 border-0 pointer-events-none'
        src={src}
        style={{
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left'
        }}
        loading='lazy'
        sandbox='allow-same-origin allow-scripts'
        {...(isMobile && {
          title: 'Mobile View'
        })}
      />
    </div>
  )
}
