import React from 'react';
import "./style.scss"
import { useRouter } from 'next/router'


const GoHome = () => {
  const router = useRouter()
  return (
    <>
      <div
        className="gohome-button"
        onClick={() => router.push("/")}
      >
        Go Home
      </div>
    </>
  )
}
export default GoHome
