import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

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
        {children}
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
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className='h-screen flex items-center justify-center'>
      <div className='max-w-[500px] w-full space-y-6 px-4'>
        <nav className='rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4'>
          <h2 className='text-6xl font-bold text-gray-600 dark:text-gray-200 text-center'>{message}</h2>
          <p className='text-center'>{details}</p>
          {stack && (
            <pre className='w-full p-4 overflow-x-auto'>
              <code>{stack}</code>
            </pre>
          )}
        </nav>
      </div>
    </main>
  )
}
