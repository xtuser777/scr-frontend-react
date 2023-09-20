import { ChangeEvent, createContext, useState } from 'react';
import CategoriesContextType from './categories-context-type';
import { ITruckType } from '../../../../models/truck-type';
import { IBillPayCategory } from '../../../../models/bill-pay-category';

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: [],
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

const CategoriesProvider = (props: any) => {
  const [data, setData] = useState<IBillPayCategory[]>([]);
  const [categories, setCategories] = useState<IBillPayCategory[]>([]);

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
    <CategoriesContext.Provider
      value={{
        categories,
        filter,
        orderBy,
        handleFilterChange,
        handleOrderByChange,
        handleFilterClick,
        remove,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
