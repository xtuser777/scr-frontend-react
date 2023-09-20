import City from './city';
import Client from './client';
import Employee from './employee';
import FreightItem from './freight-item';
import Representation from './representation';
import SaleBudget from './sale-budget';
import TruckType from './truck-type';

class FreightBudget {
  constructor(
    public id: number = 0,
    public description: string = '',
    public date: string = '',
    public distance: number = 0,
    public weight: number = 0,
    public value: number = 0,
    public shipping: string = '',
    public validate: string = '',
    public saleBudget?: SaleBudget,
    public representation?: Representation,
    public client?: Client,
    public truckType?: TruckType,
    public destiny?: City,
    public author?: Employee,
    public items: FreightItem[] = [],
  ) {}
}

export default FreightBudget;
