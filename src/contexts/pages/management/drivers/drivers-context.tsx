import { ChangeEvent, createContext, useEffect, useState } from 'react';
import DriversContextType from './drivers-context-type';
import Driver from '../../../../models/driver';
import DriverService from '../../../../services/driver-service';
import IndividualPerson from '../../../../models/individual-person';
import Person from '../../../../models/person';
import Contact from '../../../../models/contact';

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
  const [data, setData] = useState<Driver[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const [filter, setFilter] = useState('');
  const [register, setRegister] = useState('');
  const [orderBy, setOrderBy] = useState('1');

  const getData = async () => {
    const service = new DriverService();
    const data = await service.get();

    setData(data);
    setDrivers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (orderBy: string) => {
    let filteredData: Driver[] = [...data];
    if (register.length == 10) {
      filteredData = filteredData.filter((item) => item.register.substring(0, 10) == register);
    }

    if (filter.length > 0) {
      filteredData = filteredData.filter(
        (item) =>
          ((item.person as Person).individual as IndividualPerson).name.includes(filter) ||
          ((item.person as Person).contact as Contact as Contact).email.includes(filter),
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
          if (
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase() >
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase() <
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '4':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase() >
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).individual as IndividualPerson).name.toUpperCase() <
            ((x.person as Person).individual as IndividualPerson).name.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '5':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase() >
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase() <
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '6':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase() >
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).individual as IndividualPerson).cpf.toUpperCase() <
            ((x.person as Person).individual as IndividualPerson).cpf.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '7':
        filteredData = filteredData.sort((x, y) => {
          if (x.register > y.register) return 1;
          if (x.register < y.register) return -1;
          return 0;
        });
        break;
      case '8':
        filteredData = filteredData.sort((x, y) => {
          if (y.register > x.register) return 1;
          if (y.register < x.register) return -1;
          return 0;
        });
        break;
      case '9':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((x.person as Person).contact as Contact).email.toUpperCase() >
            ((y.person as Person).contact as Contact).email.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).contact as Contact).email.toUpperCase() <
            ((y.person as Person).contact as Contact).email.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '10':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).contact as Contact).email.toUpperCase() >
            ((x.person as Person).contact as Contact).email.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).contact as Contact).email.toUpperCase() <
            ((x.person as Person).contact as Contact).email.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
    }

    return filteredData;
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
    setDrivers(filterData(e.target.value));
  };

  const handleFilterClick = () => {
    setDrivers(filterData(orderBy));
  };

  const remove = async (id: number) => {
    const response = confirm('Confirma o exclusão deste motorista?');
    if (response) {
      const service = new DriverService();
      if (await service.delete(id)) {
        const newData = [...data];
        newData.splice(
          newData.findIndex((item) => item.id == id),
          1,
        );
        const newDrivers = [...drivers];
        newDrivers.splice(
          newDrivers.findIndex((item) => item.id == id),
          1,
        );
        setData(newData);
        setDrivers(newDrivers);
      }
    }
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
