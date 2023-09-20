import { ChangeEvent } from 'react';
import { ITruck } from '../../../../models/truck';

export default interface TrucksContextType {
  trucks: ITruck[];
  filter: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
