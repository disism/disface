import Head from 'next/head'
import React from "react";
import GoHome from "../../components/Icons/home";
import "./style.scss"
import { useRouter } from 'next/router'
import GoSetting from "../../components/Icons/setting";

const IAm = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>IAm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="iam-header">
          <GoHome />
          <GoSetting />
        </div>

        <h3>IAm</h3>
        <div>
          <p>这是您的 个人中心页面</p>
          <button
            className="default-button"
            onClick={() => router.push("/created")}
          >
            创建您的内容
          </button>
        </div>

        <h3>Timeline</h3>
        <div className="iam-timeline">
          <div>
            <p>您关注的 xx 频道，发布了...</p>
            <a href="/article">
              <p>标题</p>
              <p>内容，这里是测试数据...， 点击进入查看</p>
            </a>
          </div>

          <div>
            <p>您关注的 xx，更新了状态...</p>
            <p>标题</p>
            <p>状态有字数限制，类似 Twitter 的 推文，并全部显示在这里</p>
            <div>这里放图片</div>
          </div>

          <div>
            <p>您关注的 xx，发布了文章...</p>
            <a href="/article">
              <p>标题</p>
              <p>并发表在 xx 频道，点击进入查看</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default IAm