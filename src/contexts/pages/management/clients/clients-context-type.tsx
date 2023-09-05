import { ChangeEvent } from 'react';
import { IClient } from '../../../../models/Client';

export default interface ClientsContextType {
  clients: IClient[];
  filter: string;
  register: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegisterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
