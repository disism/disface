import Head from 'next/head'
import GoBack from "../../components/GoBack";

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <GoBack />
            <main>
                <h3>这里是关于本站页面，随便写点什么。</h3>
                <p>
                    构建开源, 去中心化的开放网络。
                    每个人都有权利控制自己的数据和隐私，并选择与谁分享。
                    在联邦宇宙上，任何人都可以搭建自己的实例，设计自己的界面。
                    Godis 可以与所有实现 Activitypub 协议的平台互相通讯。
                    敬请期待，Godis 正在开发中...
                </p>
                <h4>Godis 由 disism.com 提供支持</h4>
            </main>
        </div>
    )
}

export default About