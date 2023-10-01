import { ChangeEvent, createContext, useEffect, useState } from 'react';
import CategoriesContextType from './categories-context-type';
import BillPayCategory from '../../../../models/bill-pay-category';
import BillPayCategoryService from '../../../../services/bill-pay-category-service';

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: [],
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

const CategoriesProvider = (props: any) => {
  const [data, setData] = useState<BillPayCategory[]>([]);
  const [categories, setCategories] = useState<BillPayCategory[]>([]);

  const [filter, setFilter] = useState('');
  const [orderBy, setOrderby] = useState('1');

  const getData = async () => {
    const service = new BillPayCategoryService();
    const data = await service.get();

    setData(data);
    setCategories(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (orderBy: string) => {
    let filteredData: BillPayCategory[] = [...data];

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
    }

    return filteredData;
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderby(e.target.value);
    setCategories(filterData(e.target.value));
  };
  const handleFilterClick = () => {
    setCategories(filterData(orderBy));
  };

  const remove = async (id: number) => {
    const response = confirm('Confirma a exclusão desta categoria?');
    if (response) {
      const service = new BillPayCategoryService();
      if (await service.delete(id)) {
        const newData = [...data];
        newData.splice(
          newData.findIndex((item) => item.id == id),
          1,
        );
        const newCategories = [...categories];
        newCategories.splice(
          newCategories.findIndex((item) => item.id == id),
          1,
        );
      }
    }

  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        filter,
        orderBy,
        handleFilterChange,
        handleOrderByChange,
        handleFilterClick,
        remove,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
