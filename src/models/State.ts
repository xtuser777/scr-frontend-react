import City from './city';

class State {
  constructor(
    public id: number = 0,
    public name: string = '',
    public acronym: string = '',
    public cities: City[] = [],
  ) {}
}

export default State;
