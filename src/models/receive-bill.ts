import Employee from './employee';
import FreightOrder from './freight-order';
import PaymentForm from './payment-form';
import Representation from './representation';
import SaleOrder from './sale-order';

class ReceiveBill {
  constructor(
    public id: number = 0,
    public date: string = '',
    public bill: number = 0,
    public description: string = '',
    public payer: string = '',
    public amount: number = 0,
    public comission: boolean,
    public situation: number = 0,
    public dueDate: string = '',
    public amountReceived: number = 0,
    public receiveDate?: string,
    public pendency?: ReceiveBill,
    public paymentForm?: PaymentForm,
    public representation?: Representation,
    public saleOrder?: SaleOrder,
    public freightOrder?: FreightOrder,
    public author?: Employee,
  ) {}
}

export default ReceiveBill;
