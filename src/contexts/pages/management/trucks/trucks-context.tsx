import { ChangeEvent, createContext, useState } from 'react';
import TrucksContextType from './trucks-context-type';
import Truck from '../../../../models/truck';

export const TrucksContext = createContext<TrucksContextType>({
  trucks: [],
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

const TrucksProvider = (props: any) => {
  const [data, setData] = useState<Truck[]>([]);
  const [trucks, setTrucks] = useState<Truck[]>([]);

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
    <TrucksContext.Provider
      value={{
        trucks,
        filter,
        orderBy,
        handleFilterChange,
        handleOrderByChange,
        handleFilterClick,
        remove,
      }}
    >
      {props.children}
    </TrucksContext.Provider>
  );
};

export default TrucksProvider;
