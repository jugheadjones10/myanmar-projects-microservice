const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, './build')

module.exports = {
  mode: 'development',

  entry: {
    app: './src/app.js'
  },

  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        // Compile ES2015 using babel
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({title: 'react-map-gl Example'}),
    // new webpack.EnvironmentPlugin(['MapboxAccessToken'])
  ]
};
