import { ChangeEvent } from 'react';
import Proprietary from '../../../../models/proprietary';

export default interface ProprietariesContextType {
  proprietaries: Proprietary[];
  filter: string;
  register: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegisterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
