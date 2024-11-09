import Koa from 'koa';

async function main() {
  console.log('你好，世界');
  const app = new Koa();
  app.use((ctx) => {
    ctx.body = 'Hello Koa';
  });
  app.listen(3000);
}

main();
