import { ChangeEvent, createContext, useState } from 'react';
import RepresentationsContextType from './representations-context-type';
import { IRepresentation } from '../../../../models/Representation';

export const RepresentationsContext = createContext<RepresentationsContextType>({
  representations: [],
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

const RepresentationsProvider = (props: any) => {
  const [data, setData] = useState<IRepresentation[]>([]);
  const [representations, setRepresentations] = useState<IRepresentation[]>([]);

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
    <RepresentationsContext.Provider
      value={{
        representations,
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
    </RepresentationsContext.Provider>
  );
};

export default RepresentationsProvider;
