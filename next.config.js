/*
 * @Author: SilvesterChiao
 * @Date: 2020-05-14 11:16:48
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-05-18 15:10:02
 */

const withLess = require('@zeit/next-less');

module.exports = withLess({
  // 构建目录
  distDir: 'build',
  // pages 扩展后缀名
  pageExtensions: ['jsx', 'js'],
  // 构建 ID
  generateBuildId: async () => {
    return 'my-build-id'
  },
  // 启用 css modules
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
})
