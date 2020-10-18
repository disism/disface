import React from 'react';
import { useRouter } from 'next/router'
import "./style.scss"

const HomeIcons = () => {
  return (
    <svg height={24} viewBox="0 0 24 24" width={24}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="rgba(31,89,140, 1)" />
    </svg>
  )
}

const GoHome = () => {
  const router = useRouter()
  return (
    <>
      <div
        className="gohome-button"
        onClick={() => router.push("/")}
      >
        <HomeIcons />
      </div>
    </>
  )
}
export default GoHome
