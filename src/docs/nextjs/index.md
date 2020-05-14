<!--
 * @Author: SilvesterChiao
 * @Date: 2020-05-11 22:31:52
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-14 14:02:32
 -->

# next.js 学习笔记

## 路由

文件结构即为路由, 默认加载 `pages` 文件夹

假设有如下目录结构

|--static
|--pages
|    |--_app.js
|    |--_document.js
|    |--index.js  /
|    |--home.js  /home
|    |--about.js  /about(如果没有 /about/index.js 文件)
|    |--_ignore.js  不加载为路由
|    |--about
|    |    |--index.js  /about
|    |    |--about.js  /about/about

## pages/_app.js

## pages/_document.js

## 常用包

- next/link
- next/router

## 增加 less

```bash
npm install @zeit/next-less less
```

在根目录下新建 next.config.js 文件

```javascript
const withLess = require('@zeit/next-less')
module.exports = withLess()
```

## <style jsx>

## 参考链接

1. [Next.js 入门](https://segmentfault.com/a/1190000018888296)
1. [React Nextjs （上）](https://www.jianshu.com/p/afb102f52a4e)
1. [NEXTJS中文文档](https://raoenhui.github.io/nextjs/2018/08/31/Nextjs%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3/)
1. [NEXR.js 使React应用 更简单](https://nextjs.frontendx.cn/)
1. [nextgram](https://github.com/zeit/nextgram)
1. [next.js的从零到百入门配置](https://www.jianshu.com/p/1dbb2fa1069e)
1. [Next.js入门教程 原](https://cloud.tencent.com/developer/article/1369493)
