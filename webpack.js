'use strict';
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HappyPack = require('happypack');

const ENTRIES = [
  path.join(__dirname, 'src/scripts')
]

const dev = (process.env.NODE_ENV || 'development') === 'development';

let entry = {};
ENTRIES.forEach( dir => {
  fs.readdirSync( dir ).forEach( name => {
    if( fs.statSync(path.join( dir, name )).isFile() ) {
      if( name.endsWith( '.js' )) {{
        let fname = name.replace( '.js', '' );
        entry[fname] = ['babel-polyfill', path.join(dir, name)];
      }}
    }
  })
})

const config = {
  mode: dev ? 'development' : 'projuction',
  entry,
  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   exclude: /node_modules/,
      //   use: [{
      //       loader: 'style-loader'
      //     }, {
      //       loader: 'css-loader'
      //     }, {
      //       loader: 'less-loader',
      //       options: {
      //         strictMath: true,
      //         noIeCompat: true
      //       }
      //     }]
      // }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=babel'
          //[ {
          //   loader: 'bable-loader',
          //   options: {
          //     presets: ['@babel/preset-env']
          //   }
          // }]
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      }, {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/scripts/components'),
      lib: path.join(__dirname, 'src/lib'),
      mixins: path.join(__dirname, 'src/mixins'),
      middlewares: path.join(__dirname, 'src/middlewares'),
      filters: path.join(__dirname, 'src/filters')
    }
  },
  plugin: [],
  // optimization: {}
}

module.exports = config;
