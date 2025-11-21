import { Button } from 'antd'
import { useEffect, useRef, useState } from 'react'

interface ProjectShowcaseProps {
  title?: string
  logo: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonLink?: string
}

// JS-based Scrolling Column Component
function ScrollingColumn({ images, direction = 'up', duration = 40 }: { images: string[], direction?: 'up' | 'down', duration?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  
  // Measure content height once images are loaded/rendered
  useEffect(() => {
    if (containerRef.current) {
      // The height of one set of images is half the total scrollable height (since we duplicate)
      // But simpler: we just measure the first child (the wrapper of the first set)
      const firstSet = containerRef.current.firstElementChild as HTMLElement;
      if (firstSet) {
        const resizeObserver = new ResizeObserver(() => {
           setContentHeight(firstSet.offsetHeight);
        });
        resizeObserver.observe(firstSet);
        return () => resizeObserver.disconnect();
      }
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || contentHeight === 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Speed calculation: pixels per millisecond
    // We want to travel 'contentHeight' pixels in 'duration' seconds
    const speed = contentHeight / (duration * 1000); 

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate offset based on direction
      let offset = (elapsed * speed) % contentHeight;
      
      if (direction === 'up') {
        // Move up: 0 -> -contentHeight
        container.style.transform = `translateY(-${offset}px)`;
      } else {
        // Move down: -contentHeight -> 0
        // We start at -contentHeight and add offset
        container.style.transform = `translateY(-${contentHeight - offset}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [contentHeight, direction, duration]);

  return (
    <div className="h-full overflow-hidden relative w-1/5 min-w-[150px]">
       <div ref={containerRef} className="will-change-transform">
          {/* Render two copies for seamless looping */}
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex flex-col gap-8 pb-8">
              {images.map((src, j) => (
                <div key={`${copyIndex}-${j}`} className="w-full h-fit rounded-xl shadow-sm">
                  <img src={src} alt="" className="w-full h-auto object-cover transition-all duration-500" />
                </div>
              ))}
            </div>
          ))}
       </div>
    </div>
  );
}

export function ProjectShowcase({
  title = 'ThisCover',
  logo = 'https://p.weizwz.com/cover/cover_full_441653186ab35580.webp',
  subtitle = '你的封面，我来设计',
  description = '个性化主题和配置，丰富的图标，实时预览，适配多个主流平台，完全免费，还不来试试！',
  primaryButtonText = '进一步了解',
  secondaryButtonText = '开始',
  primaryButtonLink = 'https://cover.weizwz.com/',
  secondaryButtonLink = 'https://cover.weizwz.com/editor/'
}: ProjectShowcaseProps) {
  // Background images for scrolling columns
  const images = [
    'https://p.weizwz.com/cover/ThisCover_20250817_113149_50f33c9237daf1c6.webp',
    'https://p.weizwz.com/cover/ThisCover_20250817_162105_931f0a568023c6ef.webp',
    'https://p.weizwz.com/cover/ThisCover_20250817_170842_0f88bd188cabcecc.webp',
    'https://p.weizwz.com/cover/thiscover_example_1_2c9d37d69e1800f6.webp',
    'https://p.weizwz.com/cover/thiscover_example_2_1c118ab0f9fc93e0.webp',
    'https://p.weizwz.com/cover/thiscover_example_3_f41f7c9eb1e527a8.webp',
    'https://p.weizwz.com/cover/thiscover_example_4_8e2644481e476e28.webp',
    'https://p.weizwz.com/cover/thiscover_example_5_1e1feb39361e31ca.webp',
    'https://p.weizwz.com/cover/thiscover_example_6_92b78a7283d015eb.webp',
    'https://p.weizwz.com/cover/thiscover_example_7_fdbfc2f7903cbd18.webp',
    'https://p.weizwz.com/cover/thiscover_example_8_db9eec43bc97cbd4.webp',
    'https://p.weizwz.com/cover/thiscover1_4x3_1c30c0287378464e.webp',
    'https://p.weizwz.com/cover/thiscover2_3x2_4a4e2de8d6047cd0.webp',
    'https://p.weizwz.com/cover/thiscover3_2x3_56c6e944063ea327.webp'
  ];

  // Create 5 columns with randomized images and durations
  const columns = Array.from({ length: 5 }).map((_, i) => {
    // Shuffle images and pick 10 random ones
    const shuffled = [...images].sort(() => Math.random() - 0.5).slice(0, 10);
    // Random duration between 40s and 80s
    const duration = 40 + Math.random() * 40;
    return { images: shuffled, duration };
  });

  return (
    <section className='py-10 md:py-20 mx-4 md:mx-7 m-auto rounded-2xl md:rounded-4xl relative overflow-hidden'>
      {/* Scrolling Background */}
      <div className="absolute inset-0 flex gap-8 justify-center overflow-hidden opacity-50 pointer-events-none h-[150%] -top-[25%]">
        {columns.map((col, i) => (
          <ScrollingColumn 
            key={i} 
            images={col.images} 
            direction={i % 2 === 0 ? 'up' : 'down'} 
            duration={col.duration} 
          />
        ))}
      </div>
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-md z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-700/20 to-transparent z-1 pointer-events-none"></div>

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <div className='text-center'>
          {/* 项目标签 */}
          <div className='flex items-center w-fit m-auto text-white text-xl font-medium mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20'>
            <img src={logo} alt="logo" className="w-6 h-6 rounded mr-2" /> <span>{title}</span>
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
