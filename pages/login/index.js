import Head from 'next/head'
import GoBack from "../../components/GoBack";
import React from "react";

const Login = () => {
    return (
        <div>
            <Head>
                <title>LoGin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <GoBack />

                <h3>LOGIN</h3>
                <label htmlFor="username">USERNAME</label>
                <br/>
                <input placeholder="username" name="username"/>
                <br/>

                <label htmlFor="password">PASSWORD</label>
                <br/>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                />

                <br/>
                <button className="submit-button">SUBMIT</button>
            </main>
        </div>
    )
}

export default Login