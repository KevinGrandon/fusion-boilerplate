import { assetUrl, dangerouslySetHTML, createPlugin } from 'fusion-core';

export default createPlugin({
  middleware: () => {
    const url = assetUrl('../../node_modules/todomvc-app-css/index.css');
    const escaped = dangerouslySetHTML(`<link rel="stylesheet" href="${url}">`);

    return (ctx, next) => {
      if(ctx.element) {
        ctx.template.head.push(escaped);
      }

      return next();
    }
  }
});
