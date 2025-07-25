import { Button } from 'antd'
import { LeftOutlined, RightOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { config } from '../config'

interface Article {
  id: number
  title: string
  category: string
  description: string
  date: string
  link: string
  styleName: string
  tags: string[]
}

interface RSSItem {
  title: string
  link: string
  description: string
  pubDate: string
  category: string
  tags: string[]
}

interface BlogArticlesProps {
  title?: string
  subtitle?: string
}

// RSS 解析函数
const parseRSSFeed = async (rssUrl: string): Promise<RSSItem[]> => {
  try {
    const response = await fetch(rssUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const xmlText = await response.text()

    // 创建 DOMParser 来解析 XML
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml')

    // 检查解析错误
    const parseError = xmlDoc.querySelector('parsererror')
    if (parseError) {
      throw new Error('XML 解析错误')
    }

    // 获取所有 item 元素
    const items = xmlDoc.querySelectorAll('item')

    const rssItems: RSSItem[] = []

    items.forEach((item) => {
      // 处理 CDATA 包装的内容
      const extractCDATA = (content: string | null | undefined): string => {
        if (!content) return ''
        return content.replace(/^<!\[CDATA\[|\]\]>$/g, '').trim()
      }

      const titleElement = item.querySelector('title')
      const title = extractCDATA(titleElement?.textContent) || ''

      const link = item.querySelector('link')?.textContent?.trim() || ''

      const descriptionElement = item.querySelector('description')
      const description = extractCDATA(descriptionElement?.textContent) || ''

      const pubDate = item.querySelector('pubDate')?.textContent?.trim() || ''
      const category = item.querySelector('category')?.textContent?.trim() || '技术'

      // 处理标签，可能有多个 tag 元素
      const tagElements = item.querySelectorAll('tag')
      let tags: string[] = []

      if (tagElements.length > 0) {
        tagElements.forEach((tagEl) => {
          const tagContent = tagEl.textContent?.trim()
          if (tagContent) {
            // 如果标签包含逗号，按逗号分割
            const splitTags = tagContent
              .split(',')
              .map((tag) => tag.trim())
              .filter((tag) => tag)
            tags.push(...splitTags)
          }
        })
      }

      // 去重标签
      tags = [...new Set(tags)]

      if (title && link) {
        rssItems.push({
          title,
          link,
          description,
          pubDate,
          category,
          tags
        })
      }
    })

    return rssItems
  } catch (error) {
    console.error('解析 RSS 失败:', error)
    return []
  }
}

// 根据标签生成图标和渐变色的 className
const getArticleStyle = (tags: string[]) => {
  const mainTag = tags[0].toLowerCase()

  return 'weiz-icon-' + mainTag
}

// 格式化日期
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString)

    // 检查日期是否有效
    if (isNaN(date.getTime())) {
      return dateString
    }

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}年${month}月${day}日`
  } catch {
    return dateString
  }
}

// 转换 RSS 数据为组件需要的格式
const convertRSSToArticles = (rssItems: RSSItem[]): Article[] => {
  return rssItems.slice(0, 12).map((item, index) => {
    const styleName = getArticleStyle(item.tags)

    return {
      id: index + 1,
      title: item.title,
      category: item.category,
      description: item.description,
      date: formatDate(item.pubDate),
      link: item.link,
      styleName,
      tags: item.tags
    }
  })
}

export function BlogArticles({ title = '我的文章', subtitle = '来自博客的最新动态，发现更多精彩内容' }: BlogArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  // 备用文章数据
  const fallbackArticles: Article[] = [
    {
      id: 1,
      title: '如何快速无缝的从 vscode 转向AI编辑器 cursor、kiro、trae 等',
      category: '资源',
      description: '本文介绍了如何从 VSCode 快速无缝转向 AI 编辑器，如 kiro、cursor、trae 等',
      date: '2025年07月25日',
      link: config.blog.url + '/editor/ai/to-kiro',
      styleName: 'weiz-icon-ai',
      tags: ['AI', 'VSCode']
    },
    {
      id: 2,
      title: 'MacOS Sequoia系统优化',
      category: '资源',
      description: '本文介绍了 MacOS Sequoia 系统的基础优化设置，包括修改截屏保存位置、修复启动图标错乱、关闭安装来源限制等系统级操作',
      date: '2025年04月26日',
      link: config.blog.url + '/macos/setting/base-init',
      styleName: 'weiz-icon-macos',
      tags: ['MacOS']
    },
    {
      id: 3,
      title: 'VitePress 建站资源汇总',
      category: '资源',
      description:
        '本文汇总了使用 VitePress 搭建博客的资源与配置方法，包括暗黑模式切换动画、DocSearch 搜索、Fancybox 图片查看器、GitHub Giscus 评论系统、Cloudflare R2 图床配置等内容',
      date: '2025年04月18日',
      link: config.blog.url + '/vitepress/all/resource-all',
      styleName: 'weiz-icon-vitepress',
      tags: ['VitePress', '网站']
    }
  ]

  // 获取 RSS 数据
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)

        // 使用 CORS 代理获取 RSS 数据
        const rssItems = await parseRSSFeed(config.api.rss)

        if (rssItems.length > 0) {
          const convertedArticles = convertRSSToArticles(rssItems)
          setArticles(convertedArticles)
        } else {
          // 如果 RSS 没有数据，使用备用数据
          setArticles(fallbackArticles)
        }
      } catch (error) {
        console.error('获取文章失败:', error)
        // 如果获取失败，使用备用数据
        setArticles(fallbackArticles)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // 检测是否为移动设备
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // 计算PC端的最大滑动位置
  const maxSlidePC = Math.max(0, articles.length - 3)

  const nextSlide = () => {
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
  if (!loading && articles.length === 0) {
    return null
  }

  return (
    <section id='article' className='py-20 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 px-4'>{title}</h2>
        <p className='text-gray-500 text-center mb-8 md:mb-12 text-sm md:text-base px-4'>{subtitle}</p>

        {loading ? (
          <div className='flex justify-center items-center py-20'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500'></div>
          </div>
        ) : (
          <div className='relative'>
            <div className='overflow-hidden pb-10' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{
                  transform: isMobile ? `translateX(-${currentSlide * 100}%)` : `translateX(-${currentSlide * 33.33}%)`
                }}>
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 md:px-3`}
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
                />
                <Button
                  icon={<RightOutlined />}
                  shape='circle'
                  onClick={nextSlide}
                  className='flex items-center justify-center border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 transition-colors'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
