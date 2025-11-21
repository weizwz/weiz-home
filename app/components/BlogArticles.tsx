import { Button } from 'antd'
import { LeftOutlined, RightOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import type { Article } from '../types/article'

interface BlogArticlesProps {
  title?: string
  subtitle?: string
  articles?: Article[]
}

export function BlogArticles({ title = '我的文章', subtitle = '来自博客的最新动态，发现更多精彩内容', articles = [] }: BlogArticlesProps) {


  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // 计算PC端的最大滑动位置
  const maxSlidePC = Math.max(0, articles.length - 3)

  const nextSlide = () => {
    const isMobile = window.innerWidth < 768;
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
    const isMobile = window.innerWidth < 768;
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

  return (
    <section id='article' className='py-20 bg-gray-50 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 px-4'>{title}</h2>
        <p className='text-gray-500 text-center mb-8 md:mb-12 text-sm md:text-base px-4'>{subtitle}</p>

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
                    className={`w-full md:w-1/3 flex-shrink-0 md:px-3`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    <div className='bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border-1 border-slate-200 shadow-md shadow-slate-200 h-full hover:shadow-xl transition-all duration-300 overflow-hidden'>
                      {/* 文章头部 - 渐变背景 */}
                      <div className={`${article.styleName} article-icon-bg p-6 relative`}>
                        <div className='flex items-center justify-between mb-4'>
                          <span className='inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full'>
                            {article.category}
                          </span>
                          <div className='w-10 h-10 article-icon'></div>
                        </div>
                        <div className='min-h-20 flex items-center justify-center mb-4'>
                          <h3 className='text-4xl text-center font-bold text-white line-clamp-2'>{article.title}</h3>
                        </div>
                      </div>

                      {/* 文章内容 */}
                      <div className='p-4 md:p-6'>
                        <p className='leading-relaxed mb-3 md:mb-4 line-clamp-2 text-sm md:text-base'>{article.description}</p>
                        <div className='flex items-center justify-between'>
                          <span className='text-sm text-blue-500'>{article.date}</span>

                          <Button
                            className='pl-8!'
                            type='primary'
                            shape='round'
                            icon={<ArrowRightOutlined />}
                            iconPosition='end'
                            href={article.link}
                            target='_blank'>
                            阅读全文
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 导航按钮 */}
            <div className='flex justify-center'>
              <div className='flex space-x-4'>
                <Button
                  icon={<LeftOutlined />}
                  shape='circle'
                  onClick={prevSlide}
                  className='flex items-center justify-center border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-colors'
                  aria-label="Previous slide"
                />
                <Button
                  icon={<RightOutlined />}
                  shape='circle'
                  onClick={nextSlide}
                  className='flex items-center justify-center border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-colors'
                  aria-label="Next slide"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
