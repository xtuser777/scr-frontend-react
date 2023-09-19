import Person from './person';

class Parameterization {
  constructor(public id: number = 0, public logotype: string = '', public person?: Person) {}
}

export default Parameterization;
