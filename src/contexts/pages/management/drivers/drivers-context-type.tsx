import { ChangeEvent } from 'react';
import Driver from '../../../../models/driver';

export default interface DriversContextType {
  drivers: Driver[];
  filter: string;
  register: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegisterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
