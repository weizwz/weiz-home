import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/rss", "routes/api/rss.ts"),
] satisfies RouteConfig;
