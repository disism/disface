import Head from 'next/head'
import GoBack from "../../components/Icons/back";
import React from "react";
import "./style.scss"

const Channel = () => {

  return (
    <div>
      <Head>
        <title>Channel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBack />
      <main>
        <h1>disism.com Development</h1>
        <h3>c@disism-development</h3>

        <hr/>
        <div>
          <h2>该频道发布的内容时间线</h2>
          <h1>这里是测试文章的假数据</h1>
          <p>我为 disism.com 加入了基于 [Matrix.org](http://matrix.org/) 的端对端加密即时通讯程序，你只需要下载 riot 或在浏览器中访问 [m](http://m.unus.me/)atrix.disism.com ，即可使用在线的即时通讯（群组，端对端聊天），语音通话（VoIP），视频通话，文件传输。</p>
          <p>
            <a href="/article">
              点击查看全文
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Channel