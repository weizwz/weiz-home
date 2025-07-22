import {
  HeartOutlined,
  BulbOutlined,
  SearchOutlined,
} from "@ant-design/icons";

interface AboutProps {
  title?: string;
}

export function About({ title = "关于我" }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>

        <div className="grid md:grid-cols-3 gap-10">
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
      </div>
    </section>
  );
}
