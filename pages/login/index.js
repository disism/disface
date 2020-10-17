import Head from 'next/head'
import GoBack from "../../components/GoBack";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState("root")
  const [password, setPassword] = useState("123")
  const [loginError, setLoginError] = useState(false)
  const handleLogin = () => {
    if (username === "root" && password === "123") {
      router.push("/iam")
    } else {
      setLoginError(true)
    }
  }

  return (
    <div>
      <Head>
          <title>LoGin</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GoBack />

        <h3>LOGIN</h3>
        <section>
          <label htmlFor="username">USERNAME</label>
          <br/>
          <input type="text" placeholder="username" name="username"
            value={username} onChange={e => setUsername(e.target.value)}
          />
          <br/>

          <label htmlFor="password">PASSWORD</label>
          <br/>
          <input type="password" placeholder="password" name="password"
            value={password} onChange={e => setPassword(e.target.value)}
          />
          <br/>

          <p>{loginError ? "登录错误，账户名或密码错误" : null}</p>
          <button
            className="submit-button"
            onClick={handleLogin}
          >
            SUBMIT
          </button>
        </section>
      </main>
    </div>
  )
}

export default Login