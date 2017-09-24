const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback : true,
    port: 3000,
    open : true,
    inline: true,
    hot : true,
    overlay : true,
    noInfo : true,
    https : false
  }
});