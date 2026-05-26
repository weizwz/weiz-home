export interface IconConfig {
  icon?: string
  color?: string
  class?: string
  url?: string // 支持在线 SVG URL
}

export const iconMap: Record<string, IconConfig> = {
  // Common
  right: { icon: 'mdi:arrow-right' },
  random: { icon: 'mdi:shuffle' },
  post: { icon: 'mdi:file-document' },
  count: { icon: 'ri:bar-chart-line' },
  plane: { icon: 'pepicons-print:paper-plane' },
  date: { icon: 'mdi:calendar' },
  rss: { icon: 'mdi:rss' },

  // Social
  home: { icon: 'pepicons-pop:house-circle-filled' },
  github1: { icon: 'simple-icons:github' },
  gitee: { icon: 'simple-icons:gitee' },
  cnblog: { icon: 'streamline:rss-square-solid' },

  // Tags
  ai: { icon: 'hugeicons:ai-chat-02', color: '#9200ff' },
  app: { icon: 'tdesign:app', color: '#226bf0' },
  应用: { icon: 'tdesign:app', color: '#226bf0' },
  apple: { icon: 'ri:apple-fill', color: '#61748d' },
  browser: { icon: 'nimbus:browser', color: '#1f73e8' },
  浏览器: { icon: 'nimbus:browser', color: '#1f73e8' },
  cloudflare: { icon: 'devicon:cloudflare', color: '#f38021' },
  chart: { icon: 'mdi:chart-line', color: '#f72c5b' },
  图表: { icon: 'mdi:chart-line', color: '#f72c5b' },
  command: { icon: 'mdi:console', color: '#4a4a4a' },
  css: { icon: 'fa6-brands:css', color: '#7e57c2' },
  design: { icon: 'fluent:design-ideas-16-filled', color: '#f45729' },
  设计: { icon: 'fluent:design-ideas-16-filled', color: '#f45729' },
  element: { icon: 'logos:element', color: '#409eff' },
  font: { icon: 'file-icons:font-outline', color: '#ff5252' },
  字体: { icon: 'file-icons:font-outline', color: '#ff5252' },
  git: { icon: 'material-icon-theme:git', color: '#f54d28' },
  github: { icon: 'formkit:github' },
  hexo: { icon: 'simple-icons:hexo', color: '#0e83cd' },
  http: { icon: 'carbon:http', color: '#0f93e9', class: 'w-8 h-8 -top-3' },
  icon: { icon: 'tdesign:icon', color: '#f83600' },
  图标: { icon: 'tdesign:icon', color: '#f83600' },
  image: { icon: 'ep:picture-filled', color: '#1aaeff' },
  图片: { icon: 'ep:picture-filled', color: '#1aaeff' },
  javascript: { icon: 'ion:logo-javascript', color: '#f0db4e' },
  js: { icon: 'ion:logo-javascript', color: '#f0db4e' },
  macos: { icon: 'ri:apple-fill', color: '#61748d' },
  markdown: { icon: 'ri:markdown-fill', color: '#f0b100' },
  nextjs: { icon: 'simple-icons:nextdotjs' },
  'next.js': { icon: 'simple-icons:nextdotjs' },
  nginx: { icon: 'material-icon-theme:nginx', color: '#43a047' },
  node: { icon: 'devicon:nodejs', color: '#3f873f' },
  nodejs: { icon: 'devicon:nodejs', color: '#3f873f' },
  npm: { icon: 'file-icons:npm', color: '#c12126' },
  obsidian: { icon: 'simple-icons:obsidian', color: '#a88bfa' },
  oppo: { icon: 'simple-icons:oppo', color: '#1d8348', class: 'w-9 h-9 -top-4' },
  pina: { icon: 'mdi:pine-tree', color: '#28dcaa' },
  pinia: { icon: 'logos:pinia', color: '#fed85c' },
  ps: { icon: 'vscode-icons:file-type-photoshop', color: '#30a0f3' },
  python: { icon: 'logos:python', color: '#366e9e' },
  react: { icon: 'logos:react', color: '#00d8ff' },
  reactjs: { icon: 'logos:react', color: '#00d8ff' },
  router: { icon: 'gcp:cloud-routes', color: '#1b7ff9' },
  路由: { icon: 'gcp:cloud-router', color: '#1b7ff9' },
  sass: { icon: 'logos:sass', color: '#cc6699' },
  skill: { icon: 'fluent:window-dev-tools-24-filled', color: '#ff8f02' },
  ssr: { icon: 'tabler:server-spark', color: '#8a0194' },
  state: { icon: 'mdi:state-machine', color: '#28dcaa' },
  状态管理: { icon: 'mdi:state-machine', color: '#28dcaa' },
  svg: { icon: 'material-icon-theme:svg', color: '#ffb13b' },
  tailwind: { icon: 'logos:tailwindcss-icon', color: '#38bdf8' },
  tailwindcss: { icon: 'devicon:tailwindcss', color: '#38bdf8' },
  terminal: { icon: 'ion:terminal', color: '#4a4a4a' },
  终端: { icon: 'ion:terminal', color: '#4a4a4a' },
  terminology: { icon: 'boxicons:book-filled', color: '#61748d' },
  术语: { icon: 'boxicons:book', color: '#61748d' },
  ts: { icon: 'logos:typescript-icon', color: '#3178c6' },
  typescript: { icon: 'vscode-icons:file-type-typescript-official', color: '#3178c6' },
  'uni-app': { url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni.png', color: '#2c9939' },
  vercel: { icon: 'ri:vercel-fill', color: '#000000' },
  vite: { url: 'https://vite.dev/logo-without-border.svg', color: '#646cff' },
  vitepress: { url: 'https://vitepress.dev/vitepress-logo-mini.svg', color: '#8875fe' },
  vscode: { icon: 'material-icon-theme:vscode', color: '#2196f3' },
  vue: { icon: 'logos:vue', color: '#41b883' },
  vuejs: { icon: 'logos:vue', color: '#41b883' },
  webpack: { icon: 'devicon:webpack', color: '#1b78c0' },
  website: { icon: 'tdesign:web', color: '#51a2ff' },
  网站: { icon: 'bxs:server', color: '#51a2ff' },
  windows: { icon: 'uim:windows', color: '#14adef' },

  // Meta
  created: { icon: 'fluent:calendar-24-filled' },
  updated: { icon: 'iconamoon:clock-fill' },
  word: { icon: 'icon-park-solid:word' },
  user: { icon: 'mdi:user-circle' },
  link: { icon: 'material-symbols:screen-share-rounded' },
  copyright: { icon: 'boxicons:copyright-filled' },
  exclamation: { icon: 'mage:exclamation-circle-fill' },

  // Navigation
  backtop: { icon: 'fa:arrow-up' },
  comment: { icon: 'mdi:comment-text-multiple' }
}

export const defaultIcon: IconConfig = {
  icon: 'mdi:tag-outline'
}

export const normalizeTag = (tag?: string): string => {
  if (!tag) return ''
  return tag.toLocaleLowerCase().replace(/\./g, '')
}

export const getIconConfig = (tag?: string): IconConfig | undefined => {
  const normalized = normalizeTag(tag)
  return normalized ? iconMap[normalized] : undefined
}

export const getIconOptions = (tag?: string): IconConfig => {
  return getIconConfig(tag) ?? defaultIcon
}
