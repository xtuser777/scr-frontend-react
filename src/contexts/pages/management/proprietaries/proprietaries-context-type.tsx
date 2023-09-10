import { ChangeEvent } from 'react';
import { IProprietary } from '../../../../models/Proprietary';

export default interface ProprietariesContextType {
  proprietaries: IProprietary[];
  filter: string;
  register: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegisterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
