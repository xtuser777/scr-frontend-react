import { ChangeEvent, createContext, useState } from 'react';
import PaymentFormsContextType from './payment-forms-context-type';
import { IPaymentForm } from '../../../../models/PaymentForm';

export const PaymentFormsContext = createContext<PaymentFormsContextType>({
  paymentForms: [],
  filter: '',
  orderBy: '',
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleFilterClick: () => {
    /** */
  },
  remove: async (id: number) => {
    /** */
  },
});

const PaymentFormsProvider = (props: any) => {
  const [data, setData] = useState<IPaymentForm[]>([]);
  const [paymentForms, setPaymentForms] = useState<IPaymentForm[]>([]);

  const [filter, setFilter] = useState('');
  const [orderBy, setOrderby] = useState('1');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderby(e.target.value);
  };
  const handleFilterClick = () => {
    /** */
  };

  const remove = async (id: number) => {
    /** */
  };

  return (
    <PaymentFormsContext.Provider
      value={{
        paymentForms,
        filter,
        orderBy,
        handleFilterChange,
        handleOrderByChange,
        handleFilterClick,
        remove,
      }}
    >
      {props.children}
    </PaymentFormsContext.Provider>
  );
};

export default PaymentFormsProvider;
