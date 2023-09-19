import Level from './level';
import Person from './person';

class Employee {
  constructor(
    public id: number = 0,
    public type: number = 0,
    public login: string = '',
    public password?: string,
    public admission: string = '',
    public demission?: string,
    public person?: Person,
    public level?: Level,
  ) {}
}

export default Employee;
