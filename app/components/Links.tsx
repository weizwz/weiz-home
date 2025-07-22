import { GithubOutlined, MailOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

export function Links() {
  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">联系我</h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          有想法？让我们一起创造些什么吧！
          欢迎与我交流技术、分享想法或探讨合作机会。
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<GithubOutlined />}
            className="bg-gray-800 border-gray-800 hover:bg-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full"
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
            className="bg-white text-blue-600 border-white hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full"
            href="mailto:weizwz@foxmail.com"
          >
            邮箱
          </Button>
          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<EditOutlined />}
            className="bg-green-500 border-green-500 hover:bg-green-400 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 h-auto text-lg rounded-full"
            href="https://note.weizwz.com/pages/links"
            target="_blank"
          >
            留言
          </Button>
        </div>
      </div>
    </section>
  );
}
