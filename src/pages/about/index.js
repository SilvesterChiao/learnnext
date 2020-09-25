/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 16:04:42
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-22 16:00:37
 */

import { withRouter } from 'next/router'
import Layout from '../../components/Layout'

const About = withRouter((props) => {
  console.log(props)
  return (
    <Layout>
      <h1>This is the about page</h1>
    </Layout>
  )
})

export default About
