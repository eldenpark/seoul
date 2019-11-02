const path = require('path');

const root = path.resolve(__dirname, '../..');

module.exports = {
  build: path.resolve(root, 'build'),
  dist: path.resolve(root, 'dist'),
  root,
  src: path.resolve(root, 'src'),
};
