import { ChangeEvent } from 'react';
import { ITruckType } from '../../../../models/TruckType';

export default interface TruckTypesContextType {
  truckTypes: ITruckType[];
  filter: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
