import { ChangeEvent, createContext, useState } from 'react';
import DriversContextType from './drivers-context-type';
import { IDriver } from '../../../../models/driver';

export const DriversContext = createContext<DriversContextType>({
  drivers: [],
  filter: '',
  register: '',
  orderBy: '',
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleRegisterChange: (e: ChangeEvent<HTMLInputElement>) => {
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

const DriversProvider = (props: any) => {
  const [data, setData] = useState<IDriver[]>([]);
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  const [filter, setFilter] = useState('');
  const [register, setRegister] = useState('');
  const [orderBy, setOrderBy] = useState('1');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  };

  const handleFilterClick = () => {
    /** */
  };

  const remove = async (id: number) => {
    /** */
  };

  return (
    <DriversContext.Provider
      value={{
        drivers,
        filter,
        register,
        orderBy,
        handleFilterChange,
        handleRegisterChange,
        handleOrderByChange,
        handleFilterClick,
        remove,
      }}
    >
      {props.children}
    </DriversContext.Provider>
  );
};

export default DriversProvider;
