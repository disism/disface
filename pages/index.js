import Head from 'next/head'
import Header from "../components/Header";
import "./home/style.scss"
const Home = () => {
  return (
    <div>
      <Head>
        <title>Godis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        --
        <p>news:</p>
        <ul>

          <li>Microservices / 微服务改造中</li>
          <li>实现 Activitypub 服务器</li>
        </ul>
        --

        <h3>Week's picks</h3>
        <p>不容错过的本周精彩内容</p>

        <hr/>
          <h3>当前本站的时间线</h3>
          <p>本站用户正在发布的文章或者状态</p>

        <hr/>

        <h3>I'm looking for...</h3>
        <p>根据频道类型来检索感兴趣的频道</p>
        <section className="channel-type">
          <span>计算机科学</span>
          <span>计算机软件工程</span>
          <span>游戏开发</span>
          <span>硬件</span>
          <span>艺术</span>
          <span>文化</span>
          <span>文学</span>
        </section>
        <hr/>

        <h3>探索</h3>
        <button>ALL</button> / <button>A - Z</button>

        <hr/>
        <h3>活跃的实例</h3>

        <hr/>

        <h3>选择您的语言下的实例</h3>
        <select id="pet-select">
            <option value="">选择您的语言下的实例</option>
            <option>English</option>
            <option>Japanese</option>
            <option>Simplified Chinese</option>
            <option>Traditional Chinese</option>
        </select>
      </main>
    </div>
  )
}

export default Home