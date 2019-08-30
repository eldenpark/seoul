const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelRc = require('../../scripts/.babelRc');

const r = require.resolve;

module.exports = {
  context: __dirname,
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
          // {
          //   loader: r('linaria/loader'),
          //   options: {
          //     babelOptions: babelRc,
          //     sourceMap: true,
          //   },
          // },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: r('url-loader'),
            options: {
              limit: 8000,
            },
          },
        ],
      },
      {
        include: /node_modules/,
        test: /\.mjs$/,
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',

      // https://github.com/apollographql/apollo-link-state/issues/302#issuecomment-431219631
      '*', '.mjs', '.gql', '.graphql',
    ],
    modules: [
      'node_modules',
    ],
  },
  target: 'web',
};
