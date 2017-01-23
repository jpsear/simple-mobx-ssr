const path = require('path');
var fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
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
