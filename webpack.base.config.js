const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
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
      
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      // Sass and CSS
      {
        test: /\.(css|scss)(\?.+)?$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[name]-[local]-[hash:base64:9]',
                modules: true
              }
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ]
        })
      },

      // Images
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
      },

      // SVGs
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },

      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },

    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '../../build/assets/styles.css',
      allChunks: true
    }),
  ]
}
