import { GET, route } from 'awilix-koa';
import { IRouterContext } from 'koa-router';
import { IStudentService } from '@/interfaces/IStudent';

@route('/api/student')
class StudentController {
  public constructor(
    private services: { studentService: IStudentService },
  ) { }

  @route('/list')
  @GET()
  public async list(ctx: IRouterContext, next: any) {
    const data = await this.services.studentService.getList();
    ctx.body = { success: true, data };
  }
}

export default StudentController;
