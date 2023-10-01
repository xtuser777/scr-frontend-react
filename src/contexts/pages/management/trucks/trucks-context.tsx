import { ChangeEvent, createContext, useEffect, useState } from 'react';
import TrucksContextType from './trucks-context-type';
import Truck from '../../../../models/truck';
import TruckService from '../../../../services/truck-service';

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

  const getData = async () => {
    const service = new TruckService();
    const data = await service.get();

    setData(data);
    setTrucks(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (orderBy: string) => {
    let filteredData: Truck[] = [...data];
    if (filter.length > 0) {
      filteredData = filteredData.filter(
        (item) => item.brand.includes(filter) || item.model.includes(filter),
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
          if (x.plate.toUpperCase() > y.plate.toUpperCase()) return 1;
          if (x.plate.toUpperCase() < y.plate.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '4':
        filteredData = filteredData.sort((x, y) => {
          if (y.plate.toUpperCase() > x.plate.toUpperCase()) return 1;
          if (y.plate.toUpperCase() < x.plate.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '5':
        filteredData = filteredData.sort((x, y) => {
          if (x.brand.toUpperCase() > y.brand.toUpperCase()) return 1;
          if (x.brand.toUpperCase() < y.brand.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '6':
        filteredData = filteredData.sort((x, y) => {
          if (y.brand.toUpperCase() > x.brand.toUpperCase()) return 1;
          if (y.brand.toUpperCase() < x.brand.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '7':
        filteredData = filteredData.sort((x, y) => {
          if (x.model.toUpperCase() > y.model.toUpperCase()) return 1;
          if (x.model.toUpperCase() < y.model.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '8':
        filteredData = filteredData.sort((x, y) => {
          if (y.model.toUpperCase() > x.model.toUpperCase()) return 1;
          if (y.model.toUpperCase() < x.model.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '9':
        filteredData = filteredData.sort((x, y) => {
          if (x.color.toUpperCase() > y.color.toUpperCase()) return 1;
          if (x.color.toUpperCase() < y.color.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '10':
        filteredData = filteredData.sort((x, y) => {
          if (y.color.toUpperCase() > x.color.toUpperCase()) return 1;
          if (y.color.toUpperCase() < x.color.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '11':
        filteredData = filteredData.sort((x, y) => x.modelYear - y.modelYear);
        break;
      case '12':
        filteredData = filteredData.sort((x, y) => y.modelYear - x.modelYear);
        break;
    }

    return filteredData;
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderby(e.target.value);
    setTrucks(filterData(e.target.value));
  };
  const handleFilterClick = () => {
    setTrucks(filterData(orderBy));
  };

  const remove = async (id: number) => {
    const response = confirm('Confirma o exclusão deste caminhão?');
    if (response) {
      const service = new TruckService();
      if (await service.delete(id)) {
        const newData = [...data];
        newData.splice(
          newData.findIndex((item) => item.id == id),
          1,
        );
        const newTrucks = [...trucks];
        newTrucks.splice(
          newTrucks.findIndex((item) => item.id == id),
          1,
        );
        setData(newData);
        setTrucks(newTrucks);
      }
    }

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
