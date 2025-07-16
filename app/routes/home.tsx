import type { Route } from "./+types/home";
import { PersonalHomepage } from "../components/PersonalHomepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wei Z - 个人主页" },
    { name: "description", content: "Wei Z 的个人主页 - 全栈开发者，专注于现代 Web 技术" },
    { name: "keywords", content: "Wei Z, 全栈开发, React, TypeScript, 个人主页" },
  ];
}

export default function Home() {
  return <PersonalHomepage />;
}
