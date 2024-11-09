import Koa from 'koa';
import a from '@/services/a';

const PORT = 3000;

export
async function main() {
  a();
  const app = new Koa();
  app.use((ctx) => {
    ctx.body = 'Hello Koa';
  });
  app.listen(PORT, () => {
    console.log(`service works on port ${PORT} ...`);
  });
}
