import Koa from 'koa';
import a from '@/services/a';

export
async function main() {
  a();
  const app = new Koa();
  app.use((ctx) => {
    ctx.body = 'Hello Koa';
  });
  app.listen(3000);
}
