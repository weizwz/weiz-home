import {
  HeartOutlined,
  BulbOutlined,
  SearchOutlined,
  GithubOutlined,
  MailOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

interface AboutProps {
  title?: string;
}

export function About({ title = "关于我" }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="card-hover border-1 border-slate-200 shadow-md shadow-slate-200 rounded-3xl overflow-hidden">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchOutlined
                  className="text-3xl"
                  style={{ color: "#DBEAFE" }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">求知者</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                专注于现代Web开发，热爱探索新技术
                <br />
                始终保持学习的心态，拥抱科技与未来
              </p>
            </div>
          </div>
          <div className="card-hover border-1 border-slate-200 shadow-md shadow-slate-200 rounded-3xl overflow-hidden">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BulbOutlined 
                  className="text-3xl"
                  style={{ color: "#DBFCE6" }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">细节控</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                追求代码简洁和高效，严控项目的细节
                <br />
                打造用户的完美体验，提高产品的质量
              </p>
            </div>
          </div>
          <div className="card-hover border-1 border-slate-200 shadow-md shadow-slate-200 rounded-3xl overflow-hidden">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartOutlined
                  className="text-3xl"
                  style={{ color: "#FFE2E2" }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                开源精神
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                热爱分享知识和生活，相信开源的力量
                <br />
                通过代码连接全世界，用技术创造价值
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            有想法？让我们一起创造些什么吧！<br />
            欢迎与我交流技术、分享想法或探讨合作机会
          </p>
          
          <div className="flex justify-center flex-wrap gap-6">
            <Button
            type="primary"
              size="large"
              shape="round"
              icon={<GithubOutlined />}
              href="https://github.com/weizwz"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
            type="primary"
              size="large"
              shape="round"
              icon={<MailOutlined />}
              href="mailto:weizwz@foxmail.com"
            >
              邮箱
            </Button>
            <Button
            type="primary"
              size="large"
              shape="round"
              icon={<EditOutlined />}
              href="https://note.weizwz.com/pages/links"
              target="_blank"
            >
              留言
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
