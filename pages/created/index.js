import Head from 'next/head'
import GoBack from "../../components/GoBack";
import React from "react";
import "./style.scss"

const Created = () => {
  return (
    <div>
      <Head>
        <title>Created</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBack />
      <main>
        <h1>创建您的内容</h1>
      </main>
    </div>
  )
}

export default Created