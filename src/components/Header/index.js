/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 16:50:48
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-12 17:25:11
 */

import Link from 'next/link'
import React, { Component } from 'react'

const linkStyle = {
  marginRight: 15
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: 2
    }
  }
  
  render () {
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    )
  }
}
