const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const config = require('./webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('=====mode=====', config.mode);
config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename:  `[name]${config.mode === 'development' ? '' : '-[hash]'}.js`,
}

config.optimization = {
  minimize: true,
  splitChunks: {
    name: 'vender',
    chunks(chunk) {
      return chunk.name !== 'performance' && chunk.name !== 'index';
    },
    minChunks: 3
  }
}
config.module.rules.push({
  test: /\.(le|c)ss$/,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {loader: 'style-loader'}, 
    {loader: 'css-loader'},
    {loader: 'postcss-loader',
    options: 'last 2 chrome version'},
    {loader: 'less-loader'}
  ]
})
config.plugins.push(
  // new webpack.MiniCssExtractPlugin({
  //   filename: '[name].css'
  // })
)
module.exports = config;
