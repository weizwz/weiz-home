import { Button } from 'antd'
import { LeftOutlined, RightOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

interface Article {
  id: number
  title: string
  category: string
  description: string
  date: string
  link: string
  gradient: string
  icon: string
  tags?: string[]
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
const parseRSSFeed = async (rssUrl: string, useProxy: boolean = false): Promise<RSSItem[]> => {
  try {
    const response = await fetch(rssUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    let xmlText: string

    if (useProxy) {
      // 如果使用代理，需要解析 JSON 响应
      const jsonResponse = await response.json()
      xmlText = jsonResponse.contents
    } else {
      xmlText = await response.text()
    }

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

// 根据标签和分类生成图标和渐变色
const getArticleStyle = (category: string, tags: string[]) => {
  const allTags = [...tags, category].map((tag) => tag.toLowerCase())

  // 根据关键词匹配图标和颜色 - 按优先级排序

  // 设计工具类
  if (allTags.some((tag) => tag.includes('ps') || tag.includes('photoshop') || tag.includes('图片处理'))) {
    return {
      gradient: 'from-green-500 to-teal-600',
      icon: 'https://api.iconify.design/devicon-plain:photoshop.svg?color=%23fff'
    }
  }

  // 建站相关
  if (allTags.some((tag) => tag.includes('vitepress') || tag.includes('建站') || tag.includes('博客'))) {
    return {
      gradient: 'from-cyan-400 to-purple-600',
      icon: 'https://api.iconify.design/simple-icons:vitepress.svg?color=%23fff'
    }
  }

  // 系统相关
  if (allTags.some((tag) => tag.includes('macos') || tag.includes('系统') || tag.includes('优化') || tag.includes('mac'))) {
    return {
      gradient: 'from-sky-300 to-blue-500',
      icon: 'https://api.iconify.design/streamline-logos:mac-finder-logo-solid.svg?color=%23fff'
    }
  }

  // 开发工具
  if (allTags.some((tag) => tag.includes('vscode') || tag.includes('编程') || tag.includes('开发工具') || tag.includes('ide'))) {
    return {
      gradient: 'from-sky-500 to-sky-600',
      icon: 'https://api.iconify.design/akar-icons:vscode-fill.svg?color=%23fff'
    }
  }

  // 前端技术
  if (
    allTags.some(
      (tag) =>
        tag.includes('react') ||
        tag.includes('vue') ||
        tag.includes('前端') ||
        tag.includes('javascript') ||
        tag.includes('js') ||
        tag.includes('typescript') ||
        tag.includes('ts')
    )
  ) {
    return {
      gradient: 'from-blue-400 to-cyan-500',
      icon: 'https://api.iconify.design/devicon:react.svg?color=%23fff'
    }
  }

  // 资源分享
  if (allTags.some((tag) => tag.includes('图标') || tag.includes('资源') || tag.includes('icon') || tag.includes('分享'))) {
    return {
      gradient: 'from-rose-300 to-red-400',
      icon: 'https://api.iconify.design/pepicons-print:circle-big-filled.svg?color=%23fff'
    }
  }

  // 后端技术
  if (allTags.some((tag) => tag.includes('node') || tag.includes('python') || tag.includes('java') || tag.includes('后端') || tag.includes('服务器'))) {
    return {
      gradient: 'from-green-400 to-emerald-500',
      icon: 'https://api.iconify.design/material-symbols:code.svg?color=%23fff'
    }
  }

  // 数据库
  if (allTags.some((tag) => tag.includes('mysql') || tag.includes('mongodb') || tag.includes('数据库') || tag.includes('sql'))) {
    return {
      gradient: 'from-orange-400 to-red-500',
      icon: 'https://api.iconify.design/material-symbols:database.svg?color=%23fff'
    }
  }

  // 工具软件
  if (allTags.some((tag) => tag.includes('工具') || tag.includes('软件') || tag.includes('效率'))) {
    return {
      gradient: 'from-purple-400 to-pink-500',
      icon: 'https://api.iconify.design/material-symbols:build.svg?color=%23fff'
    }
  }

  // 教程类
  if (allTags.some((tag) => tag.includes('教程') || tag.includes('学习') || tag.includes('入门'))) {
    return {
      gradient: 'from-amber-400 to-orange-500',
      icon: 'https://api.iconify.design/material-symbols:school.svg?color=%23fff'
    }
  }

  // 默认样式
  return {
    gradient: 'from-indigo-400 to-purple-500',
    icon: 'https://api.iconify.design/material-symbols:article-outline.svg?color=%23fff'
  }
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
    const style = getArticleStyle(item.category, item.tags)

    return {
      id: index + 1,
      title: item.title,
      category: item.category,
      description: item.description,
      date: formatDate(item.pubDate),
      link: item.link,
      gradient: style.gradient,
      icon: style.icon,
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
      title: 'PS快速替换证件照背景',
      category: '图像处理',
      description: '本文介绍了一种使用Photoshop快速替换证件照背景的方法，且替换效果自然无杂色和毛边',
      date: '2025年06月19日',
      link: 'https://note.weizwz.com/editor/ps/photo-change-bg',
      gradient: 'from-green-500 to-teal-600',
      icon: 'https://api.iconify.design/devicon-plain:photoshop.svg?color=%23fff'
    },
    {
      id: 2,
      title: 'VitePress集成Twikoo评论',
      category: '建站资源',
      description: '本文介绍了在VitePress中集成Twikoo的方法，包括安装插件、封装组件、利用布局插槽等步骤',
      date: '2025年05月15日',
      link: 'https://note.weizwz.com/vitepress/extend/vitepress-twikoo',
      gradient: 'from-cyan-400 to-purple-600',
      icon: 'https://api.iconify.design/simple-icons:vitepress.svg?color=%23fff'
    },
    {
      id: 3,
      title: 'MacOS Sequoia系统优化',
      category: '系统优化',
      description: '本文介绍了 MacOS Sequoia 系统的基础优化设置，包括修改截屏保存位置、修复启动图标错乱等',
      date: '2025年04月26日',
      link: 'https://note.weizwz.com/macos/setting/base-init',
      gradient: 'from-sky-300 to-blue-500',
      icon: 'https://api.iconify.design/streamline-logos:mac-finder-logo-solid.svg?color=%23fff'
    }
  ]

  // 获取 RSS 数据
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        let rssItems: RSSItem[] = []

        // 尝试多种获取方式
        const fetchMethods = [
          // 方法1: 使用 allorigins 代理
          async () => {
            const proxyUrl = 'https://api.allorigins.win/get?url='
            const targetUrl = encodeURIComponent('https://note.weizwz.com/feed.xml')
            return await parseRSSFeed(`${proxyUrl}${targetUrl}`, true)
          },
          // 方法2: 使用 cors-anywhere 代理
          async () => {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const targetUrl = 'https://note.weizwz.com/feed.xml'
            return await parseRSSFeed(`${proxyUrl}${targetUrl}`)
          },
          // 方法3: 直接尝试（可能会失败，但值得一试）
          async () => {
            return await parseRSSFeed('https://note.weizwz.com/feed.xml')
          }
        ]

        // 依次尝试各种方法
        for (const method of fetchMethods) {
          try {
            rssItems = await method()
            if (rssItems.length > 0) {
              break // 成功获取数据，跳出循环
            }
          } catch (error) {
            console.warn('RSS 获取方法失败，尝试下一种方法:', error)
            continue // 继续尝试下一种方法
          }
        }

        if (rssItems.length > 0) {
          const convertedArticles = convertRSSToArticles(rssItems)
          setArticles(convertedArticles)
        } else {
          // 如果所有方法都失败，使用备用数据
          console.warn('所有 RSS 获取方法都失败，使用备用数据')
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
                      <div className={`bg-gradient-to-br ${article.gradient} p-6 relative`}>
                        <div className='flex items-center justify-between mb-4'>
                          <span className='inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full'>
                            {article.category}
                          </span>
                          <img src={article.icon} className='w-10 h-10' alt='icon' />
                        </div>
                        <h3 className='text-4xl text-center font-bold text-white mb-4'>{article.title}</h3>
                      </div>

                      {/* 文章内容 */}
                      <div className='p-4 md:p-6'>
                        <p className='leading-relaxed mb-3 md:mb-4 line-clamp-2 text-sm md:text-base'>{article.description}</p>
                        <div className='flex items-center justify-between'>
                          <span className='text-sm text-blue-500'>{article.date}</span>

                          <Button type='primary' shape='round' icon={<DoubleRightOutlined />} href={article.link} target='_blank'>
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
