import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { ConfigProvider } from 'antd'

import type { Route } from './+types/root'
import './app.css'

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
  let details = '发生意外错误'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : '错误'
    details = error.status === 404 ? '页面出游在外，不知所踪...' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
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
      <main className='h-screen flex items-center justify-center'>
        <div className='max-w-[500px] w-full'>
          <div className='rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4'>
            <h2 className='text-6xl font-bold text-gray-600 dark:text-gray-200 text-center'>{message}</h2>
            <p className='text-center'>{details}</p>
            {stack && (
              <pre className='w-full p-4 overflow-x-auto'>
                <code>{stack}</code>
              </pre>
            )}
          </div>
          <div className='h-[20vh]'></div>
        </div>
      </main>
    </ConfigProvider>
  )
}
