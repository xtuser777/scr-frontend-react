import Employee from './employee';
import Status from './Status';

class OrderStatus {
  constructor(
    public id: number,
    public status: Status,
    public date: string,
    public time: string,
    public observation: string,
    public author?: Employee,
  ) {}
}

export default OrderStatus;
