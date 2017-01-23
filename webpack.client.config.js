const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  
  output: {
    path: './build/assets',
    filename: '[name].js',
  },

	performance: {
  	hints: false
	},
  
  resolve: {
    alias: {
      '@components' : path.resolve(__dirname, 'src/components'),
      '@pages' : path.resolve(__dirname, 'src/pages'),
      '@styles' : path.resolve(__dirname, 'src/assets/styles'),
      '@images' : path.resolve(__dirname, 'src/assets/images'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.(css|scss)(\?.+)?$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[hash:8]',
                modules: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '../../build/assets/styles.css',
      allChunks: true
    })
  ]
};