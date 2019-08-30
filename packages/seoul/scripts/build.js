/* eslint-disable import/no-extraneous-dependencies */
// const babel = require('gulp-babel');
const del = require('del');
const fs = require('fs');
const gulp = require('gulp');
const { buildLogger } = require('jege/server');
const path = require('path');
const ts = require('gulp-typescript');

// const babelRc = require('./.babelRc');
const webpack = require('./webpack');
const tsConfig = require('../tsconfig.json');

const buildLog = buildLogger('[seoul]');
const paths = {
  build: path.resolve(__dirname, '../build'),
  lib: path.resolve(__dirname, '../lib'),
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src'),
};

gulp.task('clean', () => {
  const targetPath = [
    `${paths.build}`,
    `${paths.lib}/**/*`,
    `${paths.root}/{core,linaria,styled}/**/*`,
  ];

  buildLog('clean', 'targetPath: %s', targetPath);

  return del(targetPath);
});

gulp.task('interpolate', (done) => {
  if (fs.existsSync(paths.build)) {
    buildLog('interpolate', 'buildPath already exists. Make sure you remove this before building');
    throw new Error('build is not removed');
  }

  fs.mkdirSync(paths.build);
  fs.mkdirSync(path.resolve(paths.build, 'styled'));
  fs.mkdirSync(path.resolve(paths.build, 'linaria'));

  const corePath = path.resolve(paths.src, 'core');
  const files = fs.readdirSync(corePath);
  files.forEach((file) => {
    if (file.endsWith('.tsx')) {
      const filePath = path.resolve(corePath, file);
      const styledFilePath = path.resolve(paths.build, 'styled', file);
      const linariaFilePath = path.resolve(paths.build, 'linaria', file);

      const stat = fs.readFileSync(filePath);

      fs.writeFileSync(styledFilePath, `import styled from 'styled-components';\n`);
      fs.appendFileSync(styledFilePath, stat.toString());

      fs.writeFileSync(linariaFilePath, `import { styled } from 'linaria/react';\n`);
      fs.appendFileSync(linariaFilePath, stat.toString());
    }
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

gulp.task('webpack', () => {
  buildLog('webpack');
  webpack();
});

// gulp.task('babel', () => {
//   const destPath = path.resolve(paths.root, 'astroturf');
//   buildLog('babel', 'babelRc: %j, src: %s, destPath: %s', babelRc, destPath);

//   return gulp.src([`${paths.build}/astroturf/**/*.{ts,tsx}`])
//     .pipe(babel(babelRc)
//       .on('error', (err) => {
//         buildLog('babel', 'error: %o', err);
//       }))
//     .pipe(gulp.dest(destPath));
// });

gulp.task('build', gulp.series('clean', 'interpolate', 'tsc', 'webpack'));
// gulp.task('build', gulp.series('clean', 'babel'));

function build(callback) {
  const buildTask = gulp.task('build');
  buildTask(callback);
}

module.exports = build;

if (require.main === module) {
  build();
}
