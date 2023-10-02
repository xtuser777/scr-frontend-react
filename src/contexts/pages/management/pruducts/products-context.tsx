import { ChangeEvent, createContext, useEffect, useState } from 'react';
import ProductsContextType from './products-context-type';
import Product from '../../../../models/product';
import Representation from '../../../../models/representation';
import EnterprisePerson from '../../../../models/enterprise-person';
import Person from '../../../../models/person';
import ProductService from '../../../../services/product-service';

export const ProductsContext = createContext<ProductsContextType>({
  data: [],
  products: [],
  representations: [],
  filter: '',
  representation: '0',
  orderBy: '1',
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleRepresentationChange: (e: ChangeEvent<HTMLSelectElement>) => {
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

const ProductsProvider = (props: any) => {
  const [data, setData] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [representations, setRepresentations] = useState<Representation[]>([]);

  const [filter, setFilter] = useState('');
  const [representation, setRepresentation] = useState('0');
  const [orderBy, setOrderBy] = useState('1');

  const getData = async () => {
    const service = new ProductService();
    const data = await service.get();
    setData(data);
    setProducts([...data]);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (orderBy: string) => {
    let filteredData: Product[] = [...data];
    if (Number(representation) > 0) {
      filteredData = filteredData.filter(
        (item) => (item.representation as Representation).id == Number(representation),
      );
    }

    if (filter.length > 0) {
      filteredData = filteredData.filter((item) => item.description.includes(filter));
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
        filteredData = filteredData.sort((x, y) => {
          if (x.measure.toUpperCase() > y.measure.toUpperCase()) return 1;
          if (x.measure.toUpperCase() < y.measure.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '6':
        filteredData = filteredData.sort((x, y) => {
          if (y.measure.toUpperCase() > x.measure.toUpperCase()) return 1;
          if (y.measure.toUpperCase() < x.measure.toUpperCase()) return -1;
          return 0;
        });
        break;
      case '7':
        filteredData = filteredData.sort((x, y) => {
          if (x.price > y.price) return 1;
          if (x.price < y.price) return -1;
          return 0;
        });
        break;
      case '8':
        filteredData = filteredData.sort((x, y) => {
          if (y.price > x.price) return 1;
          if (y.price < x.price) return -1;
          return 0;
        });
        break;
      case '9':
        filteredData = filteredData.sort((x, y) => {
          if (
            (
              ((x.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase() >
            (
              ((y.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase()
          )
            return 1;
          if (
            (
              ((x.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase() <
            (
              ((y.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase()
          )
            return -1;
          return 0;
        });
        break;
      case '10':
        filteredData = filteredData.sort((x, y) => {
          if (
            (
              ((y.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase() >
            (
              ((x.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase()
          )
            return 1;
          if (
            (
              ((y.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase() <
            (
              ((x.representation as Representation).person as Person).enterprise as EnterprisePerson
            ).fantasyName.toUpperCase()
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
  const handleRepresentationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRepresentation(e.target.value);
  };
  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
    setProducts(filterData(e.target.value));
  };
  const handleFilterClick = () => {
    setProducts(filterData(orderBy));
  };

  const remove = async (id: number) => {
    const response = confirm('Confirma a exclusão deste produto?');
    if (response) {
      const service = new ProductService();
      if (await service.delete(id)) {
        const newData = [...data];
        newData.splice(
          newData.findIndex((item) => item.id == id),
          1,
        );
        const newProducts = [...products];
        newProducts.splice(
          newProducts.findIndex((item) => item.id == id),
          1,
        );
        setData(newData);
        setProducts(newProducts);
      }
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        data,
        products,
        representations,
        filter,
        representation,
        orderBy,
        handleFilterChange,
        handleOrderByChange,
        handleRepresentationChange,
        handleFilterClick,
        remove,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
