import ExpressIsomorphic, {
  Extend,
} from 'express-isomorphic';
import { logger } from 'jege/server';
import http from 'http';
import path from 'path';
import express, {
  NextFunction,
  Request,
} from 'express';
import {
  watch,
  withWebpackDev,
} from 'express-isomorphic-extension/webpack';

import Isomorphic from './IsomorphicState';
import webpackConfig from '../webpack/webpack.config.client.local.web';
import webpackConfigServer from '../webpack/webpack.config.server.local';

const paths = {
  build: path.resolve(__dirname, '../../build'),
  dist: path.resolve(__dirname, '../../dist'),
  src: path.resolve(__dirname, '..'),
};

const log = logger('[example-react]');

const extend: Extend<Isomorphic> = async (app, serverState) => {
  app.use((req: Request, res, next: NextFunction) => {
    log('extend(): requestUrl: %s', req.url);
    next();
  });

  app.use(express.static(paths.dist));

  withWebpackDev({
    serverState,
    webpackConfig,
  })(app);

  return watch(webpackConfigServer);
};

(async function local() {
  const { app } = await ExpressIsomorphic.createDev({
    extend,
    makeHtmlPath: path.resolve(paths.build, './makeHtml.bundle.js'),
  });

  const server = http.createServer(app);

  server.listen(6001, () => {
    log('local(): server is listening on: %s', 6001);
  });
})();
