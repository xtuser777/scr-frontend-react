import { ChangeEvent } from 'react';
import Client from '../../../../models/client';

export default interface ClientsContextType {
  clients: Client[];
  filter: string;
  register: string;
  orderBy: string;
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegisterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOrderByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterClick: () => void;
  remove: (id: number) => Promise<void>;
}
