/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 10:48:10
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-18 14:04:24
 */

import Link from 'next/link'
import React, { Component } from 'react'
import cowsay from 'cowsay-browser'
import Layout from './../components/Layout'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    const { text } = this.state
    const studentName = 'Emily'
    const layoutStyle = {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    }

    return (
      <Layout>
        <div>
          <h1>Hello Next.js</h1>
          <div style={layoutStyle}>
            <Link as={`/student/${studentName}`} href={`/student?name=${studentName}`}>
              <a>Emily</a>
            </Link>
            <pre>
              {cowsay.say({ text: 'hi there!' })}
            </pre>
            <div>
              <img src="/static/images/shan.jpg" alt="shan" />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
