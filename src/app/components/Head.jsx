import { Component } from "react"
import Head from "next/head"

export default class extends Component {
  render() {
    return (
      <>
        <Head>
            <meta charset="utf-8" />
            <meta name="description" content="Portfolio Website" />
            <meta name="keywords" content="resume, jobs, career" />
        </Head>
        <div>Page Content</div>
      </>
    )
  }
}