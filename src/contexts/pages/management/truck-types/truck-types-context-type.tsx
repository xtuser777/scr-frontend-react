import { ChangeEvent } from 'react';
import TruckType from '../../../../models/truck-type';

export default interface TruckTypesContextType {
  truckTypes: TruckType[];
  filter: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
