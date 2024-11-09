import { GET, route } from 'awilix-koa';
import { IRouterContext } from 'koa-router';
import StudentService from '@/services/StudentService';

@route('/api/student')
class StudentController {
  public constructor(
    private studentService: StudentService,
  ) { }

  @route('/list')
  @GET()
  public async list(ctx: IRouterContext, next: any) {
    const data = await this.studentService.getList();
    ctx.body = { success: true, data };
  }
}

export default StudentController;
