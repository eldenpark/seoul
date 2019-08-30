/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const fs = require('fs');
const { logger } = require('jege/server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Webpack = require('webpack');

const babelRc = require('./.babelRc');

const log = logger('[webpack]');
const r = require.resolve;

const paths = {
  build: path.resolve(__dirname, '../build'),
  linaria: path.resolve(__dirname, '../linaria'),
  src: path.resolve(__dirname, '../src'),
};

const entries = (function bootstrapWebpackEntries() {
  const result = {};
  const linariaBuildPath = path.resolve(paths.build, 'linaria');
  fs.readdirSync(linariaBuildPath)
    .forEach((filename) => {
      if (filename.endsWith('.tsx')) {
        result[filename.substring(0, filename.indexOf('.tsx'))] = path.resolve(linariaBuildPath, filename);
      }
    });
  return result;
})();

const webpackConfig = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: entries,
  externals: {
    react: 'react',
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: r('babel-loader'),
            options: babelRc,
          },
          {
            loader: r('linaria/loader'),
            options: {
              babelOptions: babelRc,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: paths.linaria,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = async function webpack() {
  log('webpack(): start compiling with config: %j', webpackConfig);

  const compiler = Webpack(webpackConfig);
  const promise = new Promise((resolve) => {
    compiler.run((err, stats) => {
      const result = stats.toJson('minimal');
      if (err || stats.hasErrors()) {
        log(`webpack(): ${chalk.red('error')} compiling %o`, err || result);
        resolve(err);
      }
      resolve(result);
    });
  });
  const result = await promise;
  return result;
};
