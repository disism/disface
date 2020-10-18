import Head from 'next/head'
import "./style.scss"
import React, {useState} from "react";
import { useRouter } from "next/router";

const NewChannel = () => {
  const router = useRouter()
  const [channelName, setChannelName] = useState("")
  const handleGoIAm = () => {
    router.push("/iam")
  }

  return (
    <div>
      <Head>
        <title>NewChannel</title>
      </Head>

      <main>
        <h1>选择是否创建属于您的频道</h1>
        <div className="new-channel">
          <label htmlFor="channel">Channel Name</label>
          <br/>
          <input
            type="text"
            name="channel"
            value={channelName}
            onChange={e => setChannelName(e.target.value)}
          />
          <br/>
          <p>https://godis.disism.com/c/{channelName}</p>
        </div>
        <div className="">
          <button className="default-button" onClick={handleGoIAm}>Next</button>
          <button className="default-button" style={{ marginLeft: `.6rem`}}
                  onClick={handleGoIAm}>Skip</button>
        </div>
      </main>
    </div>
  )
}

export default NewChannel