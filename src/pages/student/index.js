/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 16:21:31
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-22 16:00:56
 */

import { withRouter } from 'next/router'
import Layout from '../../components/Layout'

const Student = withRouter((props) => {
  const { router: { query: { name } } } = props
  
  return (
    <Layout>
      <h1>This is the student page</h1>
      <p>
        {`Name1: ${name}`}
      </p>
    </Layout>
  )
})

export default Student
