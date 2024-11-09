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

    return <div style={{ color: 'red' }} onClick={() => {
      setNum(() => num + 1);
    }}>{num}</div>;
  }
}

export default TSXController;
