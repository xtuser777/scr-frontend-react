import Employee from './employee';
import FreightOrder from './freight-order';
import SaleOrder from './sale-order';

class Event {
  constructor(
    public id: number,
    public description: string,
    public date: string,
    public time: string,
    public saleOrder?: SaleOrder,
    public freightOrder?: FreightOrder,
    public author?: Employee,
  ) {}
}

export default Event;
