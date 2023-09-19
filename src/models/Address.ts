import City from './city';

class Address {
  constructor(
    public id: number = 0,
    public street: string = '',
    public number: string = '',
    public neighborhood: string = '',
    public complement: string = '',
    public code: string = '',
    public city?: City,
  ) {}
}

export default Address;
