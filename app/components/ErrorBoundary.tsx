import { isRouteErrorResponse } from 'react-router'
import { ConfigProvider } from 'antd'
import type { Route } from '../+types/root'
import { config } from '../config'

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = '故障'
  let stack: string | undefined
  let is404 = false

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404
    console.log(error)

    message = is404 ? '404' : '错误'

    // 过滤 Chrome DevTools 的请求，不显示错误页面
    if (is404 && error.data && typeof error.data === 'string' && error.data.includes('.well-known/appspecific/com.chrome.devtools.json')) {
      return null // 不显示错误页面
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    stack = error.stack
  }

  return (
    <ConfigProvider theme={config.theme}>
      <main className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4'>
        <div className='max-w-4xl w-full text-center'>
          <div className='flex w-full items-center justify-center'>
            <div className='flex flex-col items-center md:flex-row md:gap-16'>
              {/* 图标 */}
              <div className='animate-bounce-slow relative'>
                <span className='icon icon-plane h-64! w-64! bg-gradient-to-br! from-blue-500 to-purple-500'></span>
              </div>

              {/* 404 文本 */}
              <div className='text-center md:text-left'>
                <h1 className='text-gray-800 text-9xl font-bold tracking-wider uppercase'>404</h1>
                <p className='text-gray-600 mt-4 text-2xl font-medium!'>抱歉，你访问的界面不存在</p>
                <p className='text-gray-500 text-md mt-2'>
                  搜索文章请转移至{' '}
                  <a href='https://note.weizwz.com/' target='_blank' className='text-blue-500'>
                    note.weizwz.com
                  </a>
                  ，或点击下方按钮返回首页
                </p>
                <div className='mt-8'>
                  <a
                    href='/'
                    className='bg-blue-500 hover:bg-blue-500/90 inline-block rounded-full px-8 py-3 text-lg font-semibold text-white! transition-all hover:shadow-lg'>
                    返回首页
                  </a>
                </div>
              </div>
            </div>
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
        </div>
      </main>
    </ConfigProvider>
  )
}
