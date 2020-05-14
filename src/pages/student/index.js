/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 16:21:31
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-14 11:29:05
 */

import { withRouter } from 'next/router'
import Layout from '../../components/Layout'
import style from './index.less'

const Student = withRouter((props) => {
  const { router: { query: { name } } } = props
  
  return (
    <div>
      <Layout>
        <h1>This is the student page</h1>
      </Layout>
      <div className={style['student-info']}>
        <p>
          {`Name1: ${name}`}
        </p>
      </div>
      <style jsx>{`
        div {
          font-size: 18px;
        }
      `}</style>
      <style jsx glbal>{`
        div {
          font-size: 20px;
        }
      `}</style>
    </div>
  )
})

export default Student
