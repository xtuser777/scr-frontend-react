import { ChangeEvent, createContext, useState } from 'react';
import ClientsContextType from './clients-context-type';
import { IClient } from '../../../../models/client';

export const ClientsContext = createContext<ClientsContextType>({
  clients: [],
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

const ClientsProvider = (props: any) => {
  const [data, setData] = useState<IClient[]>([]);
  const [clients, setClients] = useState<IClient[]>([]);

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
    <ClientsContext.Provider
      value={{
        clients,
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
    </ClientsContext.Provider>
  );
};

export default ClientsProvider;
