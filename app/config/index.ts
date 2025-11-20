// 应用配置
export const config = {
  // 博客相关配置
  blog: {
    url: 'https://note.weizwz.com',
    rssUrl: 'https://note.weizwz.com/feed.xml',
    linksUrl: 'https://note.weizwz.com/pages/links',
    logsUrl: 'https://note.weizwz.com/pages/logs',
  },
  
  // 社交链接
  social: {
    github: 'https://github.com/weizwz',
    email: 'mailto:weizwz@foxmail.com',
    avatar: 'https://p.weizwz.com/home_bc2e3ce7f2e00827.webp',
  },

  // 站点元数据
  site: {
    title: '分享编码与科技 - weizwz',
    description: 'weizwz 的个人主页 - 全栈开发者，专注于编码世界与科技生活',
    keywords: 'weizwz, 唯知为之, 唯知笔记, 全栈开发, 前端开发, React, Vue, Nodejs, 个人主页',
  },

  // 主题配置
  theme: {
    token: {
      colorPrimary: '#2B7FFF',
      colorInfo: '#2B7FFF',
      colorSuccess: '#67c23a',
      colorWarning: '#e6a23c',
      colorError: '#f05659',
      wireframe: false
    }
  },

  // API 配置
  api: {
    rss: '/api/rss'
  }
};