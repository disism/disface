import Head from 'next/head'
import "./style.scss"
import React from "react";
import { useRouter } from "next/router";

const CreateChannel = () => {
  return (
    <section>
      <h1>创建一个频道</h1>

    </section>
  )
}

const AccountEdit = () => {
  return (
    <section className="account-form">
      <h1>在这里完善您的个人信息</h1>

      <h2>Edit Your Name</h2>
      <div className="account-edit-name">
        <div>
          <label htmlFor="firstname">First Name:</label>
          <br/>
          <input name="name" type="text"/>
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <br/>
          <input type="text"/>
        </div>
      </div>

      <h2>Bio</h2>
      <div className="account-bio">
        <textarea type="text"/>
      </div>
    </section>
  )
}

const Guide = () => {
  const router = useRouter()
  const handleGoIAm = () => {
    router.push("/iam")
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
            <button className="submit-button" onClick={handleGoIAm}>Next</button>
            <button className="submit-button" onClick={handleGoIAm}>Skip</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Guide