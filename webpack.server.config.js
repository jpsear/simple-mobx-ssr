const fs = require('fs')
const merge = require('webpack-merge')
const config = require('./webpack.base.config.js')

const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = merge(config, {
  target: 'node',

  node: {
    __dirname: false
  },

  externals: nodeModules,

  entry: {
    index: './src/server'
  },
  
  output: {
    path: './build/server',
    filename: '[name].js',
  },
})
