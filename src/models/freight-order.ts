import City from './city';
import Client from './client';
import Driver from './driver';
import Employee from './employee';
import FreightBudget from './freight-budget';
import FreightItem from './freight-item';
import LoadStep from './load-step';
import OrderStatus from './order-status';
import PaymentForm from './payment-form';
import Proprietary from './proprietary';
import Representation from './representation';
import SaleOrder from './sale-order';
import Truck from './truck';
import TruckType from './truck-type';

class FreightOrder {
  constructor(
    public id: number = 0,
    public date: string = '',
    public description: string = '',
    public distance: number = 0,
    public weight: number = 0,
    public value: number = 0,
    public driverValue: number = 0,
    public driverEntry: number = 0,
    public shipping: string = '',
    public budget?: FreightBudget,
    public saleOrder?: SaleOrder,
    public representation?: Representation,
    public client?: Client,
    public destiny?: City,
    public truckType?: TruckType,
    public proprietary?: Proprietary,
    public driver?: Driver,
    public truck?: Truck,
    public status?: OrderStatus,
    public paymentFormFreight?: PaymentForm,
    public paymentFormDriver?: PaymentForm,
    public author?: Employee,
    public items: FreightItem[] = [],
    public steps: LoadStep[] = [],
  ) {}
}

export default FreightOrder;
