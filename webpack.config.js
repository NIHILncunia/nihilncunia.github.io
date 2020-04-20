const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 패스를 불러와야한다.

module.exports = {
  // name: 'word-relay-dev',
  // 이름이다. 사실 별 다른 기능은 가지지 않는다.

  mode: 'development',
  // mode: 'production',
  // 모드는 두가지가 있다. 디벨로먼트(개발)와 프로덕션(배포)이다.

  devtool: 'eval',
  // devtool: 'hidden-source-map',
  // 빠르게 작업하게 한다.

  resolve: {
    extensions: [
      '.js', '.css', '.sass', '.scss', '.vue',
    ],
  },

  entry: {
    // app: path.join(__dirname, './1.development/main.js'),
	  // app: path.join(__dirname, './1.development/TicTacToeEventBus/main.js'),
	  app: path.join(__dirname, './1.development/TicTacToeVuex/main.js'),
  },

  module: {
    rules: [
      {
        test: /\.vue$/, // 파일명이 뷰로 끝나는 파일
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
  ],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/1.development/complete'),
    publicPath: '/1.development/complete',
  },
};