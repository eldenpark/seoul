/* eslint-disable import/no-extraneous-dependencies */
require('core-js/fn/array/flat-map');

// const babel = require('gulp-babel');
const { buildLogger } = require('jege/server');
const del = require('del');
const fs = require('fs');
const gulp = require('gulp');
const mergeStream = require('merge-stream');
const path = require('path');
const ts = require('gulp-typescript');

// const babelRc = require('./.babelRc');
const tsConfig = require('../tsconfig.json');

const buildLog = buildLogger('[seoul]');
const paths = {
  build: path.resolve(__dirname, '../build'),
  core: path.resolve(__dirname, '../src/core'),
  lib: path.resolve(__dirname, '../lib'),
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src'),
};

gulp.task('clean', () => {
  const targetPath = [
    `${paths.build}`,
    `${paths.lib}/**/*`,
    `${paths.root}/{core,styled}/**/*`,
  ];

  buildLog('clean', 'targetPath: %s', targetPath);

  return del(targetPath);
});

gulp.task('copy', () => {
  const srcPath = [
    `${paths.core}/**/*`,
  ];

  const copyPaths = {
    emotion: path.resolve(paths.build, 'emotion'),
    styled: path.resolve(paths.build, 'styled'),
  };

  buildLog('copy', 'srcPath: %s styledPath: %s', srcPath, copyPaths.styled);
  return mergeStream(
    gulp.src(srcPath)
      .pipe(gulp.dest(copyPaths.styled)),
    gulp.src(srcPath)
      .pipe(gulp.dest(copyPaths.emotion)),
  );
});

gulp.task('interpolate', (done) => {
  if (!fs.existsSync(paths.build)) {
    buildLog('interpolate', 'buildPath does not exist');
    throw new Error('build is not removed');
  }

  const stringToInterpolate = {
    emotion: `import styled from '@emotion/styled';`,
    styled: `import styled from 'styled-components';\n`,
  };

  Object.keys(stringToInterpolate)
    .forEach((type) => {
      const buildPath = path.resolve(paths.build, type);
      buildLog('interpoate', 'will walk() at root: %s', buildPath);

      const pathList = walk(buildPath);
      buildLog('interploate', 'pathList: %j', pathList);

      pathList.forEach((filePath) => {
        const stat = fs.readFileSync(filePath);
        fs.writeFileSync(filePath, stringToInterpolate[type]);
        fs.appendFileSync(filePath, stat.toString());
      });
    });
  done();
});

gulp.task('tsc', () => {
  const srcPath = [
    `${paths.build}/**/*.{ts,tsx}`,
  ];
  const destPath = path.resolve(paths.root);

  buildLog(
    'tsc',
    'config: %j, srcPath: %s, destPath: %s',
    tsConfig.compilerOptions, srcPath, destPath,
  );

  return gulp.src(srcPath)
    .pipe(ts(tsConfig.compilerOptions)
      .on('error', (err) => {
        buildLog('tsc', 'error: %o', err);
      }))
    .pipe(gulp.dest(destPath));
});

gulp.task('build', gulp.series('clean', 'copy', 'interpolate', 'tsc'));

function build(callback) {
  const buildTask = gulp.task('build');
  buildTask(callback);
}

function walk(currPath) {
  const stat = fs.lstatSync(currPath);
  let list = [];

  if (stat.isDirectory()) {
    const subPaths = fs.readdirSync(currPath);
    subPaths.forEach((subPath) => {
      list = list.concat(walk(path.resolve(currPath, subPath)));
    });
  } else if (currPath.endsWith('.tsx') || currPath.endsWith('.ts')) {
    list.push(currPath);
  }
  return list;
}

module.exports = build;

if (require.main === module) {
  build();
}
