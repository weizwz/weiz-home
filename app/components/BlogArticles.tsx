import { Button } from 'antd'
import { LeftOutlined, RightOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import type { Article } from '../types/article'
import { Section } from './common/Section'
import { Card } from './common/Card'

interface BlogArticlesProps {
  title?: string
  subtitle?: string
  articles?: Article[]
}

export function BlogArticles({ title = '最新文章', subtitle = '分享最新的技术趋势、编程技巧和开发心得', articles = [] }: BlogArticlesProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // 计算PC端的最大滑动位置
  const maxSlidePC = Math.max(0, articles.length - 3)

  const nextSlide = () => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      // 移动端：一次滚动一个模块
      setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1))
    } else {
      // PC端：一次滚动三个模块，但不超过最大位置
      setCurrentSlide((prev) => {
        const next = prev + 3
        // 如果下一个位置超过了最大位置，就直接跳到最大位置
        // 如果已经在最大位置，就回到起点
        return prev >= maxSlidePC ? 0 : Math.min(next, maxSlidePC)
      })
    }
  }

  const prevSlide = () => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      // 移动端：一次滚动一个模块
      setCurrentSlide((prev) => (prev === 0 ? articles.length - 1 : prev - 1))
    } else {
      // PC端：一次滚动三个模块
      setCurrentSlide((prev) => {
        // 如果当前是第一页，就跳到最后一页
        if (prev === 0) {
          return maxSlidePC
        }
        // 否则向前滚动三个位置，但不小于0
        return Math.max(0, prev - 3)
      })
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // 向左滑动
      nextSlide()
    }

    if (touchStart - touchEnd < -100) {
      // 向右滑动
      prevSlide()
    }
  }

  // 自动轮播
  useEffect(() => {
    // 如果轮播被暂停，则不启动定时器
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000) // 文章轮播稍慢一些

    return () => clearInterval(interval)
  }, [currentSlide, articles.length, isPaused])

  // 如果没有文章数据，不渲染组件
  if (articles.length === 0) {
    return null
  }

  // 获取标签样式
  const getTagStyle = (category: string) => {
    switch (category) {
      case '资源':
        return 'bg-emerald-100 text-emerald-600'
      case '技术':
        return 'bg-blue-100 text-blue-600'
      case '博客':
        return 'bg-purple-100 text-purple-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <Section id='article' className='bg-white relative overflow-hidden' maxWidth='max-w-7xl'>
      <div className='relative z-10'>
        {/* Header Section: Title/Subtitle Left, Buttons Right */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 px-4'>
          <div className='text-center md:text-left mb-6 md:mb-0'>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <p className='text-gray-500'>{subtitle}</p>
          </div>

          {/* Navigation Buttons (Desktop) */}
          <div className='hidden md:flex space-x-4'>
            <Button
              icon={<LeftOutlined />}
              shape='circle'
              onClick={prevSlide}
              className='flex items-center justify-center border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all w-10 h-10'
              aria-label='Previous slide'
            />
            <Button
              icon={<RightOutlined />}
              shape='circle'
              onClick={nextSlide}
              className='flex items-center justify-center border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all w-10 h-10'
              aria-label='Next slide'
            />
          </div>
        </div>

        {false ? (
          <div className='flex justify-center items-center py-20'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>
          </div>
        ) : (
          <div className='relative'>
            <div className='overflow-hidden pb-10' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <div
                className='flex transition-transform duration-500 ease-in-out [--slide-percentage:100%] md:[--slide-percentage:33.33333%]'
                style={{
                  transform: `translateX(calc(-${currentSlide} * var(--slide-percentage)))`
                }}>
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className={`w-full md:w-1/3 flex-shrink-0 md:px-4`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    <Card className='h-full p-8 flex flex-col group relative overflow-hidden text-left'>
                      {/* Header: Category and Icon */}
                      <div className='flex justify-between items-center mb-6'>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${getTagStyle(article.category)}`}>
                          {article.category}
                        </span>
                        <div className={`w-12! h-12! icon ${article.styleName}`}></div>
                      </div>

                      {/* Body: Date, Title, Description */}
                      <div className='flex-grow flex flex-col items-start mb-6'>
                        <h3 className='w-full text-xl font-bold text-gray-900 mb-3 line-clamp-1 leading-tight group-hover:text-blue-500 transition-colors'>
                          {article.title}
                        </h3>
                        <p className='text-gray-500 text-sm leading-relaxed line-clamp-3 w-full'>{article.description}</p>
                      </div>

                      {/* Footer: Read More Link */}
                      <div className='mt-auto pt-4 border-t border-gray-50 w-full flex justify-between items-center'>
                        <div className='text-xs font-bold text-gray-400 uppercase tracking-wider'>{article.date}</div>
                        <a
                          href={article.link}
                          target='_blank'
                          className='inline-flex items-center text-gray-900 font-semibold text-sm group/link hover:text-blue-500 transition-colors'>
                          阅读文章
                          <ArrowRightOutlined className='ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform' />
                        </a>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons (Bottom) */}
            <div className='flex md:hidden justify-center mt-4'>
              <div className='flex space-x-4'>
                <Button
                  icon={<LeftOutlined />}
                  shape='circle'
                  onClick={prevSlide}
                  className='flex items-center justify-center border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all'
                  aria-label='Previous slide'
                />
                <Button
                  icon={<RightOutlined />}
                  shape='circle'
                  onClick={nextSlide}
                  className='flex items-center justify-center border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all'
                  aria-label='Next slide'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
