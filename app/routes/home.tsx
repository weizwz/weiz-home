import type { Route } from "./+types/home";
import { PersonalHomepage } from "../components/PersonalHomepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "分享编码与科技 - weizwz" },
    { name: "description", content: "weizwz 的个人主页 - 全栈开发者，专注于编码世界与科技生活" },
    { name: "keywords", content: "weizwz, 唯知为之, 唯知笔记, 全栈开发, 前端开发, React, Vue, Nodejs, 个人主页" },
  ];
}

export default function Home() {
  return <PersonalHomepage />;
}
