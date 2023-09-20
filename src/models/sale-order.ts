import City from './city';
import Client from './client';
import Employee from './employee';
import PaymentForm from './payment-form';
import SaleBudget from './sale-budget';
import SaleItem from './sale-item';

class SaleOrder {
  constructor(
    public id: number = 0,
    public date: string = '',
    public description: string = '',
    public weight: number = 0,
    public value: number = 0,
    public salesman?: Employee,
    public destiny?: City,
    public budget?: SaleBudget,
    public client?: Client,
    public paymentForm?: PaymentForm,
    public author?: Employee,
    public items: SaleItem[] = [],
  ) {}
}

export default SaleOrder;
