const r = require.resolve;

const babelRc = {
  plugins: [
    [
      r('babel-plugin-module-resolver'), {
        alias: {
          '@@universal': './src/universal',
        },
      },
    ],
    // Stage 2
    [r('@babel/plugin-proposal-decorators'), {
      decoratorsBeforeExport: true,
      legacy: false,
      // legacy: true,
    }],
    [r('@babel/plugin-proposal-class-properties'), { loose: false }],
    // "@babel/plugin-proposal-function-sent",
    // "@babel/plugin-proposal-export-namespace-from",
    // "@babel/plugin-proposal-numeric-separator",
    // "@babel/plugin-proposal-throw-expressions",

    // Stage 3
    // "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-syntax-import-meta",
    // "@babel/plugin-proposal-json-strings",
    r('babel-plugin-dynamic-import-node'),
    // [r('babel-plugin-styled-components'), {
    //   displayName: true,
    //   ssr: true,
    // }],
  ],
  presets: [
    [r('@babel/preset-env'), {
      targets: {
        node: '8.11',
      },
    }],
    r('@babel/preset-react'),
    r('@babel/preset-typescript'),
  ],
};

module.exports = babelRc;
