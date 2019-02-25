import React from 'react'
import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import Head from 'next/head'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>TakeMeTour</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
