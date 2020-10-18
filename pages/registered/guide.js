import Head from 'next/head'
import "./style.scss"
import React from "react";
import { useRouter } from "next/router";
import AccountEdit from "../../components/Account";

const Guide = () => {
  const router = useRouter()
  const handleGoNewChannel = () => {
    router.push("/registered/channel")
  }

  return (
    <div>
      <Head>
        <title>Guide</title>
      </Head>

      <main>
        <section className="guide">
          <AccountEdit />

          <div className="guide-submit">
            <button className="default-button" onClick={handleGoNewChannel}>Next</button>
            <button className="default-button" onClick={handleGoNewChannel}>Skip</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Guide