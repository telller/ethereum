const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2017', 'react', "stage-2"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.styl$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'stylus-loader' }
            ]
          })
        )
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new NpmInstallPlugin(),
    new ExtractTextPlugin({
      filename: path.resolve(__dirname, '../dist/bundle.css')
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components/'),
      media: path.resolve(__dirname, '../dist/media/')
    }
  }
};