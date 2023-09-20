import { ChangeEvent } from 'react';
import { IPaymentForm } from '../../../../models/payment-form';

export default interface PaymentFormsContextType {
  paymentForms: IPaymentForm[];
  filter: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
