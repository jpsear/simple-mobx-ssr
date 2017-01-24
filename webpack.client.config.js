const merge = require('webpack-merge')
const config = require('./webpack.base.config.js')

module.exports = merge(config, {
  entry: {
    bundle: './src/index.js'
  },
  
  output: {
    path: './build/assets',
    filename: '[name].js'
  }
});
