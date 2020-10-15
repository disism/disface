import Head from 'next/head'
import React, { useState } from "react"
import GoBack from "../../components/GoBack";

const Registered = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState({})
    const params = {
        "username": username,
        "password": password
    }
    const handleLogin = () => {
        alert("loginHandler")
    }
    console.log(data)
    return (
        <div>
            <Head>
                <title>ReGistered</title>
            </Head>
            <GoBack />
            <main>
                <h1>REGISTERED</h1>
                <h2>{data.message && `${data.message}`} {data.username && data.username}</h2>
                <div className="login">
                    <div className="lable">Username</div>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
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
                </div>
            </main>
        </div>
    )
}

export default Registered