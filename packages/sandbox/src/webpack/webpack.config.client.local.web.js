const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const paths = require('./paths');
const webpackConfigClientWeb = require('./webpack.config.client.web');

const r = require.resolve;

const config = {
  devtool: 'source-map',
  entry: {
    client: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(paths.src, 'client/client.tsx'),
    ],
    react: ['react', 'react-dom'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: r('style-loader'),
          },
          {
            loader: r('css-loader'),
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/bundle/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = merge(webpackConfigClientWeb, config);
