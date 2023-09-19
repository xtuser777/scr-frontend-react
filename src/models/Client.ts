import Person from './person';

class Client {
  constructor(public id: number = 0, public register: string = '', public person?: Person) {}
}

export default Client;
