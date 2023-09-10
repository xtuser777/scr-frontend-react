import { ChangeEvent, createContext, useState } from 'react';
import ProprietariesContextType from './proprietaries-context-type';
import { IProprietary } from '../../../../models/Proprietary';

export const ProprietariesContext = createContext<ProprietariesContextType>({
  proprietaries: [],
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

const ProprietariesProvider = (props: any) => {
  const [data, setData] = useState<IProprietary[]>([]);
  const [proprietaries, setProprietaries] = useState<IProprietary[]>([]);

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
    <ProprietariesContext.Provider
      value={{
        proprietaries,
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
    </ProprietariesContext.Provider>
  );
};

export default ProprietariesProvider;
