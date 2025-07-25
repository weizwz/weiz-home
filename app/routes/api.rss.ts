import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // 获取 RSS 数据
    const response = await fetch('https://note.weizwz.com/feed.xml');
    
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