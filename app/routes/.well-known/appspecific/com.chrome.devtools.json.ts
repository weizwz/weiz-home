import type { LoaderFunctionArgs } from "react-router";

export async function loader({}: LoaderFunctionArgs) {
  // 返回空的 JSON 响应，避免 404 错误
  return new Response('{}', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}