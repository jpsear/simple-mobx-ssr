const merge = require('webpack-merge')
const config = require('./webpack.base.config.js')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(config, {
  entry: {
    bundle: './src/index.js'
  },
  
  output: {
    path: './build/assets',
    filename: '[name].js'
  },

  plugins: [
    new CopyWebpackPlugin([
      { 
        from: './src/assets/fonts', 
        to: 'fonts'
      },
    ]),
    new CopyWebpackPlugin([
      { 
        from: './src/assets/images', 
        to: 'images'
      },
    ]),
  ]
});
