import { config } from "../config";

export function Footer() {
  return (
    <footer className="w-full p-4 md:px-12 py-10 flex flex-col items-center gap-4">
      <p>
        Copyright © 2025 {new Date().getFullYear() === 2025 ? '' : '-' + new Date().getFullYear()}
        <a className="font-bold text-blue-500 ml-2" target="_blank" href="https://weizwz.com/">weizwz</a>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <a target="_blank" href="https://reactrouter.com/" title="本站框架基于 React Router 7.5.3">
          <img alt="React Router" src="https://img.shields.io/badge/Frame-React Router-CA4245?logo=reactrouter&amp;logoColor=fff" />
        </a>
        <a target="_blank" href="https://react.dev/" title="本站语言使用 React 19.1.0">
          <img alt="React" src="https://img.shields.io/badge/Language-React-61DAFB?logo=react&amp;logoColor=fff"/>
        </a>
        <a target="_blank" href="https://tailwindcss.com/" title="本站样式库使用 Tailwind CSS 4">
          <img alt="Tailwind CSS" src="https://img.shields.io/badge/CSS-Tailwind CSS-16BCFF?logo=tailwindcss&amp;logoColor=fff"/>
        </a>
        <a target="_blank" href="https://ant.design/index-cn" title="本站UI框架使用 Ant Design 5.0">
          <img alt="Ant Design" src="https://img.shields.io/badge/UI-Ant Design-0170FE?logo=antdesign&amp;logoColor=fff"/>
        </a>
        <a target="_blank" href="https://iconify.design/" title="本站图标API使用 iconify">
          <img alt="iconify" src="https://img.shields.io/badge/Icon API-iconify-1769AA?logo=iconify&amp;logoColor=fff"/>
        </a>
        <a target="_blank" href={config.social.github} title="本站代码托管于 Github">
          <img alt="Github" src="https://img.shields.io/badge/Code-Github-432DD7?logo=github&amp;logoColor=fff"/>
        </a>
        <a target="_blank" href="https://vercel.com/" title="本站部署于 Vercel">
          <img alt="Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&amp;logoColor=fff"/>
        </a>
      </div>
    </footer>
  )
}