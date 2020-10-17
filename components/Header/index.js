import Link from "next/link"
import "./style.scss"
import React from "react"
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <header className="header">
      <div>
        <Link href="/">
            Godis
        </Link>
      </div>
      <div>
        <Link href="/iam">
            <button>IAm</button>
        </Link>

        <Link href="/login">
            <button>Login</button>
        </Link>

        <Link href="/registered">
            <button>Registered</button>
        </Link>

        <Link href="/about">
            <button>About</button>
        </Link>
      </div>
    </header>
  )
}
export default Header