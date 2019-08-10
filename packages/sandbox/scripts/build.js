const babel = require('gulp-babel');
const del = require('del');
const gulp = require('gulp');
const { buildLogger } = require('jege/server');
const path = require('path');

const babelRc = require('./.babelRc');

const log = buildLogger('[sandbox]');
const paths = {
  dist: path.resolve(__dirname, '../dist'),
  lib: path.resolve(__dirname, '../lib'),
  src: path.resolve(__dirname, '../src'),
};

gulp.task('clean', () => {
  const targetPaths = [
    `${paths.lib}/**/*`,
    `${paths.dist}/**/*`,
  ];
  log('clean', 'targetPaths: %s', targetPaths);

  return del(targetPaths);
});

gulp.task('copy-public', () => {
  const publicPath = path.resolve(paths.src, 'server/public');
  const destPath = path.resolve(paths.dist);
  log('copy-public', 'srcPath: %s, destPath: %s', publicPath, destPath);

  return gulp.src(`${publicPath}/**/*`)
    .pipe(gulp.dest(destPath));
});

gulp.task('build-example', (done) => {
  const srcPath = `${paths.src}/**/*.{js,jsx,ts,tsx}`;
  log('build-example', 'srcPath: %s, destPath: %j, babelRc: %j', srcPath, paths.dist, babelRc);

  return gulp.src([srcPath])
    .pipe(babel(babelRc))
    .pipe(gulp.dest(paths.dist))
    .on('end', done);
});

gulp.task('build-dev', gulp.series('clean', 'copy-public'));

function build(callback) {
  const buildTask = gulp.task('build-dev');
  buildTask(callback);
}

module.exports = {
  build,
  gulp,
};

if (require.main === module) {
  build();
}
