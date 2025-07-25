import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/rss", "routes/api/rss.ts"),
  route(".well-known/appspecific/com.chrome.devtools.json", "routes/.well-known/appspecific/com.chrome.devtools.json.ts"),
] satisfies RouteConfig;
