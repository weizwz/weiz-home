import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { ConfigProvider } from 'antd'
import '@ant-design/v5-patch-for-react-19'

import type { Route } from './+types/root'
import { config } from './config'
import './app.css'
import './style/icon.scss'

export const links: Route.LinksFunction = () => []

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
        <ConfigProvider theme={config.theme}>{children}</ConfigProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export { ErrorBoundary } from './components/ErrorBoundary'
