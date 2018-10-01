// @flow
import App from 'fusion-react';
import {SSRBodyTemplateToken} from 'fusion-core';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';

import root from './root.js';

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);

  // Enhance the SSRBodyTemplateToken for now.
  // We could optionally override the entire token as well.
  app.enhance(SSRBodyTemplateToken, defaultImplementation => ctx => {
    const defaultContent = defaultImplementation(ctx);
    const multiStream = require('multistream');
    const stringStream = require('string-to-stream');

    // Split up the content into:
    // - Everything before and including the first <body...> tag
    // - The main content
    // - Any footer content  (App specific)
    const [, header, main, footer] = defaultContent.match(
      /(.*\<body.*?>)(.[\s\S]*?)(<\/body.*)/
    );

    return multiStream([
      stringStream(header),
      stringStream(main),
      stringStream(footer),
    ]);
  });

  return app;
};
