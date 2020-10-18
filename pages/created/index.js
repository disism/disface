import Head from 'next/head'
import GoBack from "../../components/Icons/back";
import React, { useState } from "react";
import "./style.scss"
import NewArticle from "../../components/Editor/article";
import NewStatus from "../../components/Editor/status";

const Created = () => {
  const [newStatus, setNewStatus] = useState(false)

  return (
    <div>
      <Head>
        <title>Created</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GoBack />
      <main>
        <h1>创建您的内容</h1>
        <button className="default-button"
          onClick={() => setNewStatus(!newStatus)}
        >
          {newStatus ? "Switch NewArticle" : "Switch NewStatus"}
        </button>

        {newStatus ? <NewStatus /> : <NewArticle />}

        <section>

        </section>
      </main>
    </div>
  )
}

export default Created