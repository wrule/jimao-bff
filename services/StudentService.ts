
class StudentService {
  public getList() {
    return new Promise<any[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { name: '张三', age: 31 },
          { name: '李四', age: 32 },
          { name: '王二', age: 40 },
        ]);
      }, 1000);
    });
  }
}

export default StudentService;
