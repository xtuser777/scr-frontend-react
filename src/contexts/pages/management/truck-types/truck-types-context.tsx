import { ChangeEvent, createContext, useState } from 'react';
import TruckTypesContextType from './truck-types-context-type';
import TruckType from '../../../../models/truck-type';
import TruckTypeService from '../../../../services/truck-type-service';

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

  const getData = async () => {
    const service = new TruckTypeService();
    const data = await service.get();

    setData(data);
    setTruckTypes(data);
  };

  const filterData = (orderBy: string) => {
    let filteredData: TruckType[] = [...data];
    if (filter.length > 0) {
      filteredData = filteredData.filter((item) =>
        item.description.toUpperCase().includes(filter.toUpperCase()),
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
          if (x.description.toUpperCase() > y.description.toUpperCase()) return 1;
          if (x.description.toUpperCase() < y.description.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '4':
        filteredData = filteredData.sort((x, y) => {
          if (y.description.toUpperCase() > x.description.toUpperCase()) return 1;
          if (y.description.toUpperCase() < x.description.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '5':
        filteredData = filteredData.sort((x, y) => x.axes - y.axes);
        break;
      case '6':
        filteredData = filteredData.sort((x, y) => y.axes - x.axes);
        break;
      case '7':
        filteredData = filteredData.sort((x, y) => x.capacity - y.capacity);
        break;
      case '8':
        filteredData = filteredData.sort((x, y) => y.capacity - x.capacity);
        break;
    }

    return filteredData;
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderby(e.target.value);
    setTruckTypes(filterData(e.target.value));
  };
  const handleFilterClick = () => {
    setTruckTypes(filterData(orderBy));
  };

  const remove = async (id: number) => {
    const response = confirm('Confirma o exclusão deste tipo de caminhão?');
    if (response) {
      const service = new TruckTypeService();
      if (await service.delete(id)) {
        const newData = [...data];
        newData.splice(
          newData.findIndex((item) => item.id == id),
          1,
        );
        const newTypes = [...truckTypes];
        newTypes.splice(
          newTypes.findIndex((item) => item.id == id),
          1,
        );
        setData(newData);
        setTruckTypes(newTypes);
      }
    }
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
