import { ChangeEvent, createContext, useEffect, useState } from 'react';
import { HomeContextType } from './home-context-type';
import Event from '../../models/event';
import EventService from '../../services/event-service';

export const HomeContext = createContext<HomeContextType>({
  data: [],
  events: [],
  filter: '',
  date: '',
  orderType: '0',
  filterData: () => {
    return [];
  },
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleDateChange: (e: ChangeEvent<HTMLInputElement>) => {
    /** */
  },
  handleOrderTypeChange: (e: ChangeEvent<HTMLSelectElement>) => {
    /** */
  },
  handleFilterClick: () => {
    /** */
  },
});

const HomeProvider = (props: any) => {
  const [data, setData] = useState(new Array<Event>());
  const [events, setEvents] = useState(new Array<Event>());

  const [filter, setFilter] = useState('');
  const [date, setDate] = useState('');
  const [orderType, setOrderType] = useState('0');

  const getData = async () => {
    const service = new EventService();
    const data: Event[] = await service.get();
    setData(data);
    setEvents(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData = (): Event[] => {
    let filteredData: Event[] = [...data];
    if (date.length == 10) {
      filteredData = filteredData.filter((item) => item.date.substring(0, 10) == date);
    }

    if (orderType != '0') {
      filteredData = filteredData.filter((item) => {
        if (orderType == '1') return item.saleOrder;
        if (orderType == '2') return item.freightOrder;
      });
    }

    if (filter.length > 0) {
      filteredData = filteredData.filter((item) => item.description.includes(filter));
    }

    return filteredData;
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleOrderTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderType(e.target.value);
  };

  const handleFilterClick = () => {
    const data = filterData();

    setEvents(data);

    console.log(filter, date, orderType);
  };

  return (
    <HomeContext.Provider
      value={{
        data,
        events,
        filter,
        date,
        orderType,
        filterData,
        handleFilterChange,
        handleDateChange,
        handleOrderTypeChange,
        handleFilterClick,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
