import { GET, route } from 'awilix-koa';
import { IRouterContext } from 'koa-router';
import { createElement, useState } from 'react';
import { renderToString } from 'react-dom/server';

@route('/api/tsx')
class TSXController {
  @route('/abc')
  @GET()
  public async list(ctx: IRouterContext) {
    ctx.body = renderToString(createElement(() => this.render()));
  }

  public render() {
    const [num, setNum] = useState<number>(1234);

    return (
      <>
        <html lang="en">
          <head>
            <title>TSX Test</title>
          </head>
          <body>
            <div>
              <h1>这是一个TSX的测试页面</h1>
            </div>
            <div>
              <span>当前数字是：</span>
              <span>{num}</span>
              <button>增加</button>
            </div>
          </body>
        </html>
      </>
    );
  }
}

export default TSXController;
