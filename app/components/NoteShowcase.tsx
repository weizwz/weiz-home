import { Button } from 'antd'
import { config } from '../config'

import { Section } from './common/Section'
import { BrowserFrame } from './common/BrowserFrame'
import { TechStack } from './common/TechStack'

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
  subtitle = '个人博客',
  description = '基于现代 Web 技术栈构建的个人博客平台，专注于技术文章分享和知识沉淀。支持 本地搜索、代码高亮、标签分类等功能。采用响应式设计，提供优秀的阅读体验。',
  primaryButtonText = '访问博客',
  secondaryButtonText = '站点日志',
  primaryButtonLink = config.blog.url,
  secondaryButtonLink = config.blog.logsUrl
}: NoteShowcaseProps) {
  
  const techStack = ['VitePress', 'Vue3', 'ElementPlus', 'Cloudflare'];

  return (
    <Section className='bg-gray-50' maxWidth='max-w-7xl'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
        
        {/* Left Column: Visual (Browser Frame) */}
        <div className='relative lg:col-span-7 order-last lg:order-first'>
          {/* Background Blob */}
          <div className='absolute -inset-4 bg-blue-200/50 rounded-3xl z-0 blur-2xl'></div>

          {/* Browser Window */}
          <BrowserFrame url={primaryButtonLink}>
            {/* Browser Content (Image) */}
            <div className='relative h-auto overflow-hidden bg-white group pt-1'>
              <img 
                src="https://p.weizwz.com/siteshot_note.webp" 
                alt="Blog Preview"
                className="w-full object-top transition-transform duration-800 group-hover:scale-[1.03]"
              />
              {/* Inner Shadow */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
            </div>
          </BrowserFrame>
        </div>

        {/* Right Column: Content */}
        <div className='text-left space-y-8 lg:col-span-5'>
          {/* Tag */}
          <div className='inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium'>
            {subtitle}
          </div>

          {/* Title */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight'>
            {title}
          </h2>

          {/* Description */}
          <p className='text-lg text-gray-600 leading-relaxed max-w-xl'>
            {description}
          </p>

          {/* Tech Stack */}
          <TechStack items={techStack} />

          {/* Buttons */}
          <div className='flex flex-wrap gap-4 pt-4'>
            <Button 
              type='primary' 
              size='large' 
              shape='round' 
              href={primaryButtonLink} 
              target='_blank' 
              className="w-full sm:w-auto"
            >
              {primaryButtonText}
            </Button>
            <Button 
              size='large' 
              shape='round' 
              href={secondaryButtonLink} 
              target='_blank' 
              className="w-full sm:w-auto"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>

      </div>
    </Section>
  )
}
