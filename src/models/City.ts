import State from './state';

class City {
  constructor(public id: number = 0, public name: string = '', public state?: State) {}
}

export default City;
