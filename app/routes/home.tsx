import type { Route } from "./+types/home";
import { PersonalHomepage } from "../components/PersonalHomepage";
import { config } from "../config";
import type { Article } from "../types/article";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "分享编码与科技 - weizwz" },
    { name: "description", content: "weizwz 的个人主页 - 全栈开发者，专注于编码世界与科技生活" },
    { name: "keywords", content: "weizwz, 唯知为之, 唯知笔记, 全栈开发, 前端开发, React, Vue, Nodejs, 个人主页" },
  ];
}

// Helper to parse RSS XML using Regex (since we are in Node environment without DOMParser)
function parseRSS(xml: string): Article[] {
  const items: Article[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  const extractTag = (xml: string, tag: string) => {
    const regex = new RegExp(`<${tag}>(.*?)<\/${tag}>`, 's');
    const m = xml.match(regex);
    return m ? m[1].replace(/^<!\[CDATA\[|\]\]>$/g, '').trim() : '';
  };

  const extractTags = (xml: string) => {
    const tags: string[] = [];
    const regex = /<tag>(.*?)<\/tag>/g;
    let m;
    while ((m = regex.exec(xml)) !== null) {
      const content = m[1].replace(/^<!\[CDATA\[|\]\]>$/g, '').trim();
      if (content) {
        content.split(',').forEach(t => tags.push(t.trim()));
      }
    }
    return [...new Set(tags)];
  };

  const getArticleStyle = (tags: string[]) => {
    const mainTag = tags[0]?.toLowerCase() || 'default';
    return 'weiz-icon-' + mainTag;
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}年${month}月${day}日`;
    } catch {
      return dateString;
    }
  };

  let index = 0;
  while ((match = itemRegex.exec(xml)) !== null) {
    const itemContent = match[1];
    const title = extractTag(itemContent, 'title');
    const link = extractTag(itemContent, 'link');
    const description = extractTag(itemContent, 'description');
    const pubDate = extractTag(itemContent, 'pubDate');
    const category = extractTag(itemContent, 'category') || '技术';
    const tags = extractTags(itemContent);

    if (title && link) {
      items.push({
        id: ++index,
        title,
        link,
        description,
        date: formatDate(pubDate),
        category,
        tags,
        styleName: getArticleStyle(tags),
      });
    }
    
    if (items.length >= 12) break;
  }

  return items;
}

export async function loader() {
  try {
    const response = await fetch(config.blog.rssUrl);
    if (!response.ok) throw new Error("Failed to fetch RSS");
    const xml = await response.text();
    const articles = parseRSS(xml);
    return { articles };
  } catch (error) {
    console.error("RSS Fetch Error:", error);
    // Fallback data
    const fallbackArticles: Article[] = [
      {
        id: 1,
        title: '如何快速无缝的从 vscode 转向AI编辑器 cursor、kiro、trae 等',
        category: '资源',
        description: '本文介绍了如何从 VSCode 快速无缝转向 AI 编辑器，如 kiro、cursor、trae 等',
        date: '2025年07月25日',
        link: config.blog.url + '/editor/ai/to-kiro',
        styleName: 'weiz-icon-ai',
        tags: ['AI', 'VSCode']
      },
      {
        id: 2,
        title: 'MacOS Sequoia系统优化',
        category: '资源',
        description: '本文介绍了 MacOS Sequoia 系统的基础优化设置，包括修改截屏保存位置、修复启动图标错乱、关闭安装来源限制等系统级操作',
        date: '2025年04月26日',
        link: config.blog.url + '/macos/setting/base-init',
        styleName: 'weiz-icon-macos',
        tags: ['MacOS']
      },
      {
        id: 3,
        title: 'VitePress 建站资源汇总',
        category: '资源',
        description:
          '本文汇总了使用 VitePress 搭建博客的资源与配置方法，包括暗黑模式切换动画、DocSearch 搜索、Fancybox 图片查看器、GitHub Giscus 评论系统、Cloudflare R2 图床配置等内容',
        date: '2025年04月18日',
        link: config.blog.url + '/vitepress/all/resource-all',
        styleName: 'weiz-icon-vitepress',
        tags: ['VitePress', '网站']
      }
    ];
    return { articles: fallbackArticles };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;
  return <PersonalHomepage articles={articles} />;
}
