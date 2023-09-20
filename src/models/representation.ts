import Person from './person';

class Representation {
  constructor(
    public id: number = 0,
    public register: string = '',
    public unity: string = '',
    public person?: Person,
  ) {}
}

export default Representation;
