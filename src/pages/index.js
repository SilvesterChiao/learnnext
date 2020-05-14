/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 10:48:10
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-14 10:32:49
 */

import Link from 'next/link'
import React, { Component } from 'react'
import App from './_app'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {

    return (
       <App />
    )
  }
}
