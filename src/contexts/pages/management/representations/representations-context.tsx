import { ChangeEvent, createContext, useEffect, useState } from 'react';
import RepresentationsContextType from './representations-context-type';
import Representation from '../../../../models/representation';
import EnterprisePerson from '../../../../models/enterprise-person';
import Person from '../../../../models/person';
import Contact from '../../../../models/contact';
import RepresentationService from '../../../../services/representation-service';

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
  const [data, setData] = useState<Representation[]>([]);
  const [representations, setRepresentations] = useState<Representation[]>([]);

  const [filter, setFilter] = useState('');
  const [register, setRegister] = useState('');
  const [orderBy, setOrderBy] = useState('1');

  const getData = async () => {
    const service = new RepresentationService();
    const data = await service.get();
    setData(data);
    setRepresentations(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (orderBy: string) => {
    let filteredData: Representation[] = [...data];
    if (register.length == 10) {
      filteredData = filteredData.filter((item) => item.register.substring(0, 10) == register);
    }

    if (filter.length > 0) {
      filteredData = filteredData.filter(
        (item) =>
          ((item.person as Person).enterprise as EnterprisePerson).fantasyName.includes(filter) ||
          item.unity.includes(filter) ||
          ((item.person as Person).contact as Contact).email.includes(filter),
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
            ((x.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase() >
            ((y.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase() <
            ((y.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '4':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase() >
            ((x.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase() <
            ((x.person as Person).enterprise as EnterprisePerson).fantasyName.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '5':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((x.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase() >
            ((y.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase()
          )
            return 1;
          if (
            ((x.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase() <
            ((y.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '6':
        filteredData = filteredData.sort((x, y) => {
          if (
            ((y.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase() >
            ((x.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase()
          )
            return 1;
          if (
            ((y.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase() <
            ((x.person as Person).enterprise as EnterprisePerson).cnpj.toUpperCase()
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
          if (x.unity.toUpperCase() > y.unity.toUpperCase()) return 1;
          if (x.unity.toUpperCase() < y.unity.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '10':
        filteredData = filteredData.sort((x, y) => {
          if (y.unity.toUpperCase() > x.unity.toUpperCase()) return 1;
          if (y.unity.toUpperCase() < x.unity.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '11':
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
      case '12':
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
    setRepresentations(filterData(e.target.value));
  };

  const handleFilterClick = () => {
    setRepresentations(filterData(orderBy));
  };

  const remove = async (id: number) => {
    const response = confirm('Confirma a exclusão desta representação?');
    if (response) {
      const service = new RepresentationService();
      if (await service.delete(id)) {
        const newData = [...data];
        newData.splice(
          newData.findIndex((item) => item.id == id),
          1,
        );
        const newRepresentations = [...representations];
        newRepresentations.splice(
          newRepresentations.findIndex((item) => item.id == id),
          1,
        );
        setData(newData);
        setRepresentations(newRepresentations);
      }
    }
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
