import Koa from 'koa';
import { createContainer, Lifetime } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-koa';
// import b from 'koa-swig';
import Test from './test';
import React from 'react';
import { renderToString } from 'react-dom/server';

const PORT = 3000;

export
async function main() {
  const node = React.createElement(Test);
  const a = renderToString(node);
  console.log(a);
  return;
  const app = new Koa();
  // app.use((ctx) => {
  //   ctx.body = 'Hello Koa';
  // });

  const container = createContainer();
  container.loadModules([`${__dirname}/services/*.ts`], {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SCOPED,
    },
  });
  app.use(scopePerRequest(container));
  app.use(loadControllers(`${__dirname}/routers/*.ts`));

  app.listen(PORT, () => {
    console.log(`service works on port ${PORT} ...`);
  });
}
