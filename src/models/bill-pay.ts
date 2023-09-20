import BillPayCategory from './bill-pay-category';
import Driver from './driver';
import Employee from './employee';
import FreightOrder from './freight-order';
import PaymentForm from './payment-form';
import SaleOrder from './sale-order';

class BillPay {
  constructor(
    public id: number = 0,
    public date: string = '',
    public bill: number = 0,
    public type: number = 0,
    public description: string = '',
    public enterprise: string = '',
    public installment: number = 0,
    public amount: number = 0,
    public comission: boolean,
    public situation: number = 0,
    public dueDate: string = '',
    public amountPaid: number = 0,
    public paymentDate?: string,
    public pendency?: BillPay,
    public driver?: Driver,
    public salesman?: Employee,
    public freightOrder?: FreightOrder,
    public saleOrder?: SaleOrder,
    public paymentForm?: PaymentForm,
    public category?: BillPayCategory,
    public author?: Employee,
  ) {}
}

export default BillPay;
