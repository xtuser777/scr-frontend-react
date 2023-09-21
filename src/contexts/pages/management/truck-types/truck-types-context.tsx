import { ChangeEvent, createContext, useState } from 'react';
import TruckTypesContextType from './truck-types-context-type';
import TruckType from '../../../../models/truck-type';

export const TruckTypesContext = createContext<TruckTypesContextType>({
  truckTypes: [],
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

const TruckTypesProvider = (props: any) => {
  const [data, setData] = useState<TruckType[]>([]);
  const [truckTypes, setTruckTypes] = useState<TruckType[]>([]);

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
    <TruckTypesContext.Provider
      value={{
        truckTypes,
        filter,
        orderBy,
        handleFilterChange,
        handleOrderByChange,
        handleFilterClick,
        remove,
      }}
    >
      {props.children}
    </TruckTypesContext.Provider>
  );
};

export default TruckTypesProvider;
