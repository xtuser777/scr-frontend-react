import Client from './client';
import Employee from './employee';
import SaleItem from './sale-item';
import City from './city';

class SaleBudget {
  constructor(
    public id: number = 0,
    public description: string = '',
    public date: string = '',
    public clientName: string = '',
    public clientDocument: string = '',
    public clientPhone: string = '',
    public clientCellphone: string = '',
    public clientEmail: string = '',
    public weight: number = 0,
    public value: number = 0,
    public validate: string = '',
    public salesman?: Employee,
    public client?: Client,
    public destiny?: City,
    public author?: Employee,
    public items: SaleItem[] = [],
  ) {}
}

export default SaleBudget;
