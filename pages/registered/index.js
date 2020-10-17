import Head from 'next/head'
import React, { useState } from "react"
import GoBack from "../../components/GoBack";
import "./style.scss"
import { useRouter } from 'next/router'

const RegisterDescription = () => {
  return (
    <section className="register-description">
      <p>您的所有数据群不都可与其他的 Activitypub 的服务器通讯。</p>
      <p>为了安全，请设置独立于不同服务账户的密码。</p>
      <p>当您注册之后，您将会进入到新用户引导界面，会提示您是否要建立频道及完善您的个人信息。</p>
      <p>本实例由 disism.com 维护，您也可以选择其他的实例注册或选择搭建自己的实例。</p>
    </section>
  )
}
const Registered = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const params = {
      "username": username,
      "password": password
  }

  const handleLogin = () => {
      router.push("/registered/guide")
  }
  return (
    <div>
      <Head>
        <title>ReGistered</title>
      </Head>
      <GoBack />
      <main>
        <h1>REGISTERED</h1>
        <section className="register-layout">
          <section>
            <div className="lable">Username</div>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <br/>
            <p>https://godis.disism.com/@{username}</p>
            <div className="lable">Password</div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <br />
            <button
              className="submit-button"
              onClick={() => handleLogin()}
            >
              Registered
            </button>
          </section>
          <RegisterDescription />
        </section>
        </main>
    </div>
  )
}

export default Registered