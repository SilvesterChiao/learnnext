/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-12 10:54:51
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-12 14:50:40
 */

const path = require('path');
const Koa = require('koa')
const serve = require('koa-static');
const koaBody = require('koa-body')
const app = new Koa()

const main = async (ctx) => {
  const body = ctx.request.body
  if (!body.name) ctx.throw(400, '. name required')
  ctx.response.body = { name: body.name }
}

app.use(koaBody())
app.use(serve(path.join(__dirname, '/static')))
app.use(main)
app.listen(5001)
