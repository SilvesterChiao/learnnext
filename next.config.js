/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-14 11:16:48
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-14 11:21:18
 */

const withLess = require('@zeit/next-less');
module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
})
