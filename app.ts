import Koa from 'koa';
import a from '@/services/a';
import { createContainer, Lifetime } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-koa';
// import b from 'koa-swig';

const PORT = 3000;

export
async function main() {
  console.log('你好，世界');
  return;
  a();
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
