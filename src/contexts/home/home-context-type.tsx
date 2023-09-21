import { ChangeEvent } from 'react';
import Event from '../../models/event';

export interface HomeContextType {
  data: Event[];
  events: Event[];
  filter: string;
  date: string;
  orderType: string;
  filterData: () => Event[];
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
}
