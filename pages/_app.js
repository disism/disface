import App from 'next/app'
import Layout from "../components/Layout"
import "../styles/globals.scss"
import React from "react";
import { motion } from "framer-motion"

class Godis extends App {
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Layout>
        <motion.div
          key={router.route}
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: .1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    )
  }
}

export default Godis
