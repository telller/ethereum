const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const statConf = {
  assets: false,
  chunks: false,
  hash: false,
  version: false,
  errors: true,
  errorDetails: false,
  warnings: true
}
const alias = {
  'project-components': path.resolve('./components'),
  'project-services': path.resolve('./services')
}
module.exports = {
  entry: './app/main.js',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        }))
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }))
      },
      {
        test: /\.(img|png|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    stats: statConf,
    port: '3000'
  },
  plugins: [
    new ExtractTextPlugin('./dist/bundle.css')
  ],
  resolve: {
    alias: alias
  }
}