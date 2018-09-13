const path = require('path');
const fs = require('fs');
const config = require('./webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

config.output = {
  path: path.resolve(__dirname, 'strict'),
  filename:  `dist/js/[name]${config.mode === 'development' ? '' : '-[chunkhash]'}.js`,
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
config.plugin.push(
  new webpack.MiniCssExtractPlugin({
    filename: '[name].css'
  })
)
