import Head from 'next/head'
import GoBack from "../../components/GoBack";
import React from "react";

const Create = () => {
  return (
    <div>
      <Head>
        <title>Create</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GoBack />

      </main>
    </div>
  )
}

export default Create