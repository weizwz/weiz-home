import type { LoaderFunctionArgs } from "react-router";

export async function loader({}: LoaderFunctionArgs) {
  try {
    // 从环境变量获取 RSS URL，提供默认值
    const rssUrl = process.env.RSS_FEED_URL || 'https://note.weizwz.com/feed.xml';
    
    // 获取 RSS 数据
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    // 返回 XML 数据，设置正确的 Content-Type
    return new Response(xmlText, {
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300', // 缓存 5 分钟
      },
    });
  } catch (error) {
    console.error('获取 RSS 失败:', error);
    
    // 返回错误响应
    return new Response('Failed to fetch RSS', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}