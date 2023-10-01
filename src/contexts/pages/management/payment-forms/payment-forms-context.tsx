import { ChangeEvent, createContext, useEffect, useState } from 'react';
import PaymentFormsContextType from './payment-forms-context-type';
import PaymentForm from '../../../../models/payment-form';
import PaymentFormService from '../../../../services/payment-form-service';

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
  const [data, setData] = useState<PaymentForm[]>([]);
  const [paymentForms, setPaymentForms] = useState<PaymentForm[]>([]);

  const [filter, setFilter] = useState('');
  const [orderBy, setOrderby] = useState('1');

  const getData = async () => {
    const service = new PaymentFormService();
    const data = await service.get();

    setData(data);
    setPaymentForms(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (orderBy: string) => {
    let filteredData: PaymentForm[] = [...data];

    if (filter.length > 0) {
      filteredData = filteredData.filter((item) =>
        item.description.toUpperCase().includes(filter.toUpperCase()),
      );
    }

    switch (orderBy) {
      case '1':
        filteredData = filteredData.sort((x, y) => x.id - y.id);
        break;
      case '2':
        filteredData = filteredData.sort((x, y) => y.id - x.id);
        break;
      case '3':
        filteredData = filteredData.sort((x, y) => {
          if (x.description.toUpperCase() > y.description.toUpperCase()) return 1;
          if (x.description.toUpperCase() < y.description.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '4':
        filteredData = filteredData.sort((x, y) => {
          if (y.description.toUpperCase() > x.description.toUpperCase()) return 1;
          if (y.description.toUpperCase() < x.description.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '5':
        filteredData = filteredData.sort((x, y) => x.link - y.link);
        break;
      case '6':
        filteredData = filteredData.sort((x, y) => y.link - x.link);
        break;
      case '7':
        filteredData = filteredData.sort((x, y) => x.deadline - y.deadline);
        break;
      case '8':
        filteredData = filteredData.sort((x, y) => y.deadline - x.deadline);
        break;
    }

    return filteredData;
  };  

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderby(e.target.value);
    setPaymentForms(filterData(e.target.value));
  };
  const handleFilterClick = () => {
    setPaymentForms(filterData(orderBy));
  };

  const remove = async (id: number) => {
    const response = confirm('Confirma a exclusão desta forma de pagamento?');
    if (response) {
      const service  = new PaymentFormService();
      if (await service.delete(id)) {
        const newData = [...data];
        newData.splice(
          newData.findIndex((item) => item.id == id),
          1,
        );
        const newForms = [...paymentForms];
        newForms.splice(
          newForms.findIndex((item) => item.id == id),
          1,
        );
        
        setData(newData);
        setPaymentForms(newForms);
      }
    }

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
