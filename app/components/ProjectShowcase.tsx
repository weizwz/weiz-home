
import { Button } from 'antd'

import { useMemo } from 'react'
import { Section } from './common/Section'
import { BrowserFrame } from './common/BrowserFrame'
import { TechStack } from './common/TechStack'

interface ProjectShowcaseProps {
  title?: string
  subTitle?: string
  logo?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonLink?: string
}

// JS-based Scrolling Column Component


// Background images for scrolling columns
const IMAGES = [
  'https://p.weizwz.com/cover/ThisCover_20250817_113149_50f33c9237daf1c6.webp',
  'https://p.weizwz.com/cover/ThisCover_20250817_170842_0f88bd188cabcecc.webp',
  'https://p.weizwz.com/cover/thiscover_example_1_2c9d37d69e1800f6.webp',
  'https://p.weizwz.com/cover/thiscover_example_2_1c118ab0f9fc93e0.webp',
  'https://p.weizwz.com/cover/thiscover_example_3_f41f7c9eb1e527a8.webp',
  'https://p.weizwz.com/cover/thiscover_example_4_8e2644481e476e28.webp',
  'https://p.weizwz.com/cover/ThisCover_20251122_200945_9817439a52309ebe.webp',
  'https://p.weizwz.com/cover/ThisCover_20251122_200033_d6ef3e567113ef9c.webp',
  'https://p.weizwz.com/cover/thiscover_example_5_1e1feb39361e31ca.webp',
  'https://p.weizwz.com/cover/thiscover_example_6_92b78a7283d015eb.webp',
  'https://p.weizwz.com/cover/thiscover_example_7_fdbfc2f7903cbd18.webp',
  'https://p.weizwz.com/cover/thiscover_example_8_db9eec43bc97cbd4.webp',
  'https://p.weizwz.com/cover/thiscover1_4x3_1c30c0287378464e.webp',
  'https://p.weizwz.com/cover/thiscover3_2x3_56c6e944063ea327.webp',
  'https://p.weizwz.com/cover/ThisCover_20251124_104354_aaf33287ee6a7ddd.webp',
];

export function ProjectShowcase({
  title = 'ThisCover',
  subTitle = '封面生成器',
  logo = 'https://p.weizwz.com/cover/cover_full_441653186ab35580.webp',
  description = '一个免费、漂亮的封面生成器，提供丰富的素材和众多模板。支持多种格式导出，让每个人都能轻松制作出专业级的封面设计。无需设计经验，点点点即可完成精美封面制作。',
  primaryButtonText = '立即体验',
  secondaryButtonText = '了解更多',
  primaryButtonLink = 'https://cover.weizwz.com/editor/',
  secondaryButtonLink = 'https://cover.weizwz.com/'
}: ProjectShowcaseProps) {

  // Create 3 columns with sequential images and random durations
  const columns = useMemo(() => {
    const columnCount = 3;
    const itemsPerColumn = Math.ceil(IMAGES.length / columnCount);
    
    return Array.from({ length: columnCount }).map((_, i) => {
      // Slice images for this column to ensure uniqueness
      const start = i * itemsPerColumn;
      const end = start + itemsPerColumn;
      const columnImages = IMAGES.slice(start, end);
      
      // Random duration between 32s and 42s
      const duration = 22 + Math.random() * 10;
      return { images: columnImages, duration };
    });
  }, []);

  const techStack = ['Next.js', 'TailwindCSS', 'Iconify API', 'Unsplash API'];

  return (
    <Section className='py-20' maxWidth='max-w-7xl'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>

        {/* Left Column: Content */}
        <div className='text-left space-y-8 lg:col-span-6'>
          {/* Tag */}
          <div className='inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium'>
            {subTitle}
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
              shape='round' 
              size='large'
              href={secondaryButtonLink} 
              target='_blank' 
              className="w-full sm:w-auto"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>

        {/* Right Column: Browser Frame Visual */}
        <div className='relative lg:col-span-6'>
          {/* Background Blob */}
          <div className='absolute -inset-4 bg-indigo-200/50 rounded-3xl z-0 blur-2xl'></div>
          
          {/* Browser Window */}
          <BrowserFrame url={secondaryButtonLink}>
            {/* Browser Content (Carousel) */}
            <div className='h-[400px] md:h-[500px] p-4 overflow-hidden bg-gray-50'>
              <div className='h-full relative overflow-hidden rounded-xl flex gap-4'>
                  {columns.map((col, i) => (
                    <div key={i} className="w-1/3 h-full relative overflow-hidden">
                      <div 
                        key={col.duration}
                        className="w-full flex flex-col gap-4 pb-4 will-change-transform"
                        style={{
                          animation: `scroll-${i % 2 === 0 ? 'up' : 'down'}-half ${col.duration}s linear infinite`
                        }}
                      >
                        {/* Render two copies for seamless looping */}
                        {[0, 1].map((copyIndex) => (
                          <div key={copyIndex} className="flex flex-col gap-4">
                            {col.images.map((src, j) => (
                              <div key={`${copyIndex}-${j}`} className="w-full h-fit rounded-xl shadow-sm overflow-hidden">
                                <img src={src} alt="" className="w-full h-auto object-cover" />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </BrowserFrame>
        </div>

      </div>
    </Section>
  )
}
