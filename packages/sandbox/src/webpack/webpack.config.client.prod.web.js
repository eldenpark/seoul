const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const path = require('path');

const paths = require('./paths');
const webpackConfigClientWeb = require('./webpack.config.client.web');

const r = require.resolve;

const config = {
  entry: {
    client: path.resolve(paths.src, 'client/client.tsx'),
    react: ['react', 'react-dom'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: r('css-loader'),
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: r('css-loader'),
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    chunkFilename: 'chunk.[chunkhash].js',
    filename: '[name].[chunkhash].js',
    path: paths.dist,
    publicPath: '/bundle/',
  },
};

module.exports = merge(webpackConfigClientWeb, config);
