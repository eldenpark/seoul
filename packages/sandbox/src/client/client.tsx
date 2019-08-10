import { logger } from 'jege';
import React from 'react';
import ReactDOM from 'react-dom';

import ClientApp from './ClientApp';

const log = logger('[sandbox]');

declare global {
  interface Window {
    _babelPolyfill: any;
  }
  namespace NodeJS {
    interface Global {
      _babelPolyfill: any;
    }
  }
}

(function setBabelPolyfill() {
  if ((typeof window !== 'undefined' && !window._babelPolyfill)
    || (typeof global !== 'undefined' && !global._babelPolyfill)) {
    log(`setBabelPolyfill(): babel-polyfill is imported, since it wasn't imported yet`);
    require('babel-polyfill');
  }
})();

(function initiateClient() {
  log('initiateClient(): running in NODE_ENV: %s', process.env.NODE_ENV);

  const appRoot = document.getElementById('app-root');

  ReactDOM.hydrate(
    <ClientApp />,
    appRoot,
  );
})();
