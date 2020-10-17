import Head from 'next/head'
import Header from "../components/Header";

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

          <h3>I'm looking for...</h3>
          <p>根据频道类型来检索感兴趣的频道</p>

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