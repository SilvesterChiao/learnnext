/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-26 11:13:22
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-26 11:24:23
 */

import { withRouter } from 'next/router'
import Layout from '../../components/Layout'

const Personal = withRouter((props) => {
  const userInfo = {
    name: 'SilvesterChiao',
    age: 18,
  }
  
  return (
    <Layout>
      <h1>This is the student page</h1>
      <p>
        {`Name: ${userInfo.name}`}
      </p>
      <div>
        头像上传
      </div>
      <div>
        
      </div>
    </Layout>
  )
})

export default Personal