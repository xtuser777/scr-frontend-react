import BankData from './bank-data';
import Person from './person';

class Driver {
  constructor(
    public id: number = 0,
    public register: string = '',
    public cnh: string = '',
    public person?: Person,
    public bankData?: BankData,
  ) {}
}

export default Driver;
