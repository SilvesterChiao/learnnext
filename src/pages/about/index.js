/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 16:04:42
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-12 17:03:47
 */

import { withRouter } from 'next/router'
import Layout from '../../components/Layout'

const About = withRouter((props) => {
  console.log(props)
  return (
    <div>
      <Layout>
        <h1>This is the about page</h1>
      </Layout>
    </div>
  )
})

export default About
