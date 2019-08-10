/* eslint-disable import/no-extraneous-dependencies */
// const babel = require('gulp-babel');
const del = require('del');
const gulp = require('gulp');
const { buildLogger } = require('jege/server');
const path = require('path');
const ts = require('gulp-typescript');

// const babelRc = require('./.babelRc');
const tsConfig = require('../tsconfig.json');

const buildLog = buildLogger('[seoul]');
const paths = {
  lib: path.resolve(__dirname, '../lib'),
  src: path.resolve(__dirname, '../src'),
  styled: path.resolve(__dirname, '../styled'),
};

gulp.task('clean', () => {
  buildLog('clean', 'target: %s, %s', paths.lib, paths.styled);

  return del([
    `${paths.lib}/**/*`,
    `${paths.styled}/**/*`,
  ]);
});

gulp.task('tsc', () => {
  buildLog(
    'tsc',
    'config: %j, src: %s, dest: %s',
    tsConfig.compilerOptions, paths.src, paths.styled,
  );

  return gulp.src([`${paths.src}/styled/**/*.{ts,tsx}`])
    .pipe(ts(tsConfig.compilerOptions)
      .on('error', (err) => {
        buildLog('tsc', 'error: %o', err);
      }))
    .pipe(gulp.dest(paths.styled));
});

// gulp.task('babel', () => {
//   log('babel', 'babelRc: %j, src: %s', babelRc, paths.src);

//   return gulp.src([`${paths.src}/**/*.{ts,tsx}`])
//     .pipe(babel(babelRc)
//       .on('error', (err) => {
//         log('babel', 'error: %o', err);
//       }))
//     .pipe(gulp.dest(paths.lib));
// });

gulp.task('build', gulp.series('clean', 'tsc'));
// gulp.task('build', gulp.series('clean', 'babel'));

function build(callback) {
  const buildTask = gulp.task('build');
  buildTask(callback);
}

module.exports = build;

if (require.main === module) {
  build();
}
