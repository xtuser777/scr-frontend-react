import { ChangeEvent, createContext, useState } from 'react';
import EmployeesContextType from './employees-context-type';
import { IEmployee } from '../../../../models/Employee';

export const EmployeesContext = createContext<EmployeesContextType>({
  employees: [],
  filter: '',
  admission: '',
  orderBy: '',
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleAdmissionChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleFilterClick: () => {
    /** */
  },
  desactivate: async (id: number) => {
    /** */
  },
  reactivate: async (id: number) => {
    /** */
  },
  remove: async (id: number) => {
    /** */
  },
});

const EmployeesProvider = (props: any) => {
  const [data, setData] = useState<IEmployee[]>([]);
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const [filter, setFilter] = useState('');
  const [admission, setAdmission] = useState('');
  const [orderBy, setOrderBy] = useState('1');

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  };
  const handleAdmissionChange = (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  };

  const handleFilterClick = () => {
    /** */
  };

  const desactivate = async (id: number) => {
    /** */
  };
  const reactivate = async (id: number) => {
    /** */
  };

  const remove = async (id: number) => {
    /** */
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        filter,
        admission,
        orderBy,
        handleFilterChange,
        handleAdmissionChange,
        handleOrderByChange,
        handleFilterClick,
        desactivate,
        reactivate,
        remove,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
