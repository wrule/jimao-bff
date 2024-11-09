import { GET, route } from 'awilix-koa';
import { IRouterContext } from 'koa-router';

@route('/api')
class StudentController {

  @route('/list')
  @GET()
  public list(ctx: IRouterContext, next: any) {
    ctx.body = { message: '1234' };
  }
}
