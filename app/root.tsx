import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { ConfigProvider } from 'antd'
import '@ant-design/v5-patch-for-react-19'

import type { Route } from './+types/root'
import './app.css'
import './style/icon.scss'

export const links: Route.LinksFunction = () => [
  // {
  //   rel: "preconnect",
  //   href: "https://fonts.gstatic.com",
  //   crossOrigin: "anonymous",
  // }
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#2B7FFF',
              colorInfo: '#2B7FFF',
              // colorSuccess: '#67c23a',
              // colorWarning: '#e6a23c',
              // colorError: '#f05659',
              wireframe: false
            }
          }}>
          {children}
        </ConfigProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = '故障'
  let stack: string | undefined
  let is404 = false

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404
    message = is404 ? '404' : '错误'
    
    // 过滤 Chrome DevTools 的请求，不显示错误页面
    if (is404 && error.data && typeof error.data === 'string' && 
        error.data.includes('.well-known/appspecific/com.chrome.devtools.json')) {
      return null; // 不显示错误页面
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    stack = error.stack
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#409eff',
          colorInfo: '#409eff',
          colorSuccess: '#67c23a',
          colorWarning: '#e6a23c',
          colorError: '#f05659',
          wireframe: false
        }
      }}>
      <main className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4'>
        <div className='max-w-2xl w-full text-center'>
          {/* 404 图标和标题 */}
          <div className='mb-8'>
            <div className='text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text mb-4'>
              {message}
            </div>
            <p className='text-gray-600 text-lg mb-8'>{is404 ? '页面开始了他的自由旅行…' : '页面某乱了，自我反思中…'}</p>
          </div>

          {/* 404 特殊提示 */}
          {is404 && (
            <div className='bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8'>
              <div className='flex items-center justify-center mb-4'>
                <div className='w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
              </div>
              <h3 className='text-lg font-semibold text-blue-800 mb-2'>📝 博客已迁移</h3>
              <p className='text-blue-700 mb-4'>我的博客内容已迁移至新地址，欢迎访问获取最新文章和技术分享</p>
              <a
                href='https://note.weizwz.com'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors duration-200'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
                访问新博客 note.weizwz.com
              </a>
            </div>
          )}

          {/* 操作按钮 */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href='/'
              className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
              <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              返回首页
            </a>
          </div>

          {/* 开发环境错误堆栈 */}
          {stack && (
            <div className='mt-8 text-left'>
              <details className='bg-red-50 border border-red-200 rounded-lg p-4'>
                <summary className='cursor-pointer text-red-800 font-medium mb-2'>开发调试信息</summary>
                <pre className='text-sm text-red-700 overflow-x-auto'>
                  <code>{stack}</code>
                </pre>
              </details>
            </div>
          )}

          {/* 装饰元素 */}
          <div className='absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse'></div>
          <div className='absolute top-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse' style={{ animationDelay: '1s' }}></div>
          <div className='absolute bottom-20 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-pulse' style={{ animationDelay: '2s' }}></div>
          <div className='absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-pulse' style={{ animationDelay: '0.5s' }}></div>
        </div>
      </main>
    </ConfigProvider>
  )
}
