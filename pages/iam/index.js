import Head from 'next/head'
import GoBack from "../../components/GoBack";
import React from "react";
import GoHome from "../../components/GoHome";
import "./style.scss"
import { useRouter } from 'next/router'

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
          <GoBack />
          <GoHome />
        </div>

        <h3>IAm</h3>
        <div>
          <p>这是您的 个人中心页面</p>
          <button
            className="submit-button"
            onClick={() => router.push("/created")}
          >
            创建您的内容
          </button>
        </div>
      </main>
    </div>
  )
}

export default IAm