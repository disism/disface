import Head from 'next/head'
import GoBack from "../../components/Icons/back";
import React from "react";
import "./style.scss"

const Article = () => {

  return (
    <div>
      <Head>
        <title>Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBack />
      <main>
        <h1>这里是测试文章的假数据</h1>
        <p>
          我为 disism.com 加入了基于 [Matrix.org](http://matrix.org/) 的端对端加密即时通讯程序，你只需要下载 riot 或在浏览器中访问 [m](http://m.unus.me/)atrix.disism.com ，即可使用在线的即时通讯（群组，端对端聊天），语音通话（VoIP），视频通话，文件传输。

          通过 Olm ，Megolm 和 double ratchet 实现的端到端加密，在你和对方的终端随机生成加密密钥，服务器仅仅传输的是字符串。所以，你和他人的聊天记录不会被服务器解密也不会被第三个人知道。该 web 客户端是 Riot-web （它是一个功能丰富的 Matrix 客户端，并且拥有多国语言的本地化支持）。你也可以选择其它的基于 Matrix 协议的客户端，在登陆时手动填写 [disism.com](http://disism.com) 的服务器地址 [s](http://s.unus.me/)erver.disism.com 。你也可以选择搭建自己的服务器（可以参考install.disism.com 中对于 Debian9 编写的安装 Synapse 服务器的步骤演示），Matrix 是一个去中心化的分散网络，从而不会因为集中在一个服务器而被封锁，不同的服务器也可以相互通讯。

          互联网的未来应该是开放和分散的，以前孤立的通讯平台应该是可以相互通讯的，并且自己应该有权利控制自己的隐私数据，自己选择与他人共享。

          进入 disism.com 了解更多 😊
        </p>

        <hr/>
        <p>文章发布在 - <a href="/channel" style={{ textDecoration: `underline dotted` }}>c@disism-development</a> - 频道下</p>
        <div className="article-features">
          <span>Like +1</span> - <span>收藏</span> - <span>转发到你的时间线</span> - <span>分享</span>
        </div>
      </main>
    </div>
  )
}

export default Article